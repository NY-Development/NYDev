import axios from "axios";
import { NextResponse } from "next/server"; 

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Destructure all expected fields, old and new
    const { 
      name, 
      email, 
      courseId, 
      amount, 
      age,
      phoneNumber,
      universityYear,
      universityName,
      department,
      level
    } = body;

    // --- Validation ---
    if (!name || !email || !courseId || !amount || !phoneNumber) {
      return NextResponse.json({ message: "Missing required enrollment fields." }, { status: 400 });
    }

    // --- Data Sanitization for Chapa ---
    // 1. Sanitize the courseId to remove illegal characters (slashes, colons, etc.)
    // Allowed: letters, numbers, hyphens, underscores, spaces, and dots.
    const cleanCourseId = courseId
        .replace(/[^a-zA-Z0-9-_\s.]/g, '') // Remove disallowed characters
        .trim();

    // 2. Define the payment reference and Chapa customization details
    const tx_ref = `tx-${Date.now()}-${cleanCourseId.substring(0, 5)}`; 
    const shortTitle = "Course Payment"; 
    
    // Use a simple, clean description string
    const cleanDescription = `Enrollment for ${cleanCourseId}`;


    // --- Chapa Payment Initialization ---
    const chapaResponse = await axios.post(
      "https://api.chapa.co/v1/transaction/initialize",
      {
        amount,
        currency: "ETB",
        email,
        first_name: name,
        phone_number: phoneNumber, 
        tx_ref,
        callback_url: `${process.env.NEXT_BACKEND_URL}/api/chapa/callback`,
        return_url: `${process.env.NEXT_FRONTEND_URL}/enroll/success?tx_ref=${tx_ref}`,
        customization: {
          title: shortTitle, 
          // Use the sanitized description
          description: cleanDescription, 
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // ... (Optional: Save to DB here)

    return NextResponse.json({
      checkout_url: chapaResponse.data.data.checkout_url,
      tx_ref,
    });
  } catch (error) {
    console.error("Chapa init error:", error.response?.data || error.message);
    
    return NextResponse.json(
        { message: "Payment initialization failed", details: error.response?.data || error.message }, 
        { status: 500 }
    );
  }
}