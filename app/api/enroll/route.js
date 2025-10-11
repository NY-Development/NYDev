import axios from "axios";
import { NextResponse } from "next/server"; // Use NextResponse for Next.js 13+ App Router API Routes

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Destructure all expected fields, old and new
    const { 
      name, 
      email, 
      courseId, // Changed from 'course' to 'courseId' to match frontend
      amount, 
      age,
      phoneNumber,
      universityYear,
      universityName,
      department,
      level
    } = body;

    // --- Validation ---
    // Validate critical fields required for payment and enrollment
    if (!name || !email || !courseId || !amount || !phoneNumber) {
      return NextResponse.json({ message: "Missing required enrollment fields." }, { status: 400 });
    }

    // Prepare data to save to your database (optional but recommended)
    const enrollmentData = {
        name,
        email,
        courseId,
        amount,
        age,
        phoneNumber,
        universityYear,
        universityName,
        department,
        level,
        // Chapa details will be added after successful init
    };

    // --- Chapa Payment Initialization ---
    const tx_ref = `tx-${Date.now()}-${courseId}`; // Better reference including course ID

    const chapaResponse = await axios.post(
      "https://api.chapa.co/v1/transaction/initialize",
      {
        amount,
        currency: "ETB",
        email,
        first_name: name,
        // Phone number is optional for Chapa, but good to include
        phone_number: phoneNumber, 
        tx_ref,
        // Customize the return URL to include the transaction reference
        callback_url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chapa/callback`, // Assuming a separate callback route for Chapa webhooks
        return_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/enroll/success?tx_ref=${tx_ref}`,
        customization: {
          title: `${courseId.toUpperCase()} Enrollment`,
          description: `Student registration for ${courseId}`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // After successful Chapa initialization, you can save the enrollment record
    // to your database, marking it as 'PENDING'.
    // e.g., await db.enrollments.create({ data: { ...enrollmentData, tx_ref, status: 'PENDING' } });

    return NextResponse.json({
      checkout_url: chapaResponse.data.data.checkout_url,
      tx_ref,
      // Pass back the enrollment data ID if you saved it
    });
  } catch (error) {
    console.error("Chapa init error:", error.response?.data || error.message);
    
    // Return a structured error response
    return NextResponse.json(
        { message: "Payment initialization failed", details: error.response?.data || error.message }, 
        { status: 500 }
    );
  }
}