import connectDB from "@/lib/mongodb";
import Enrollment from "../../../models/Enrollment";
import axios from "axios";

export async function POST(req) {
  await connectDB();
  const data = await req.json();

  const txRef = `nydev_${Date.now()}`;

  // Save initial record
  await Enrollment.create({
    ...data,
    chapaTxRef: txRef,
  });

  // Initialize Chapa
  const response = await axios.post(
    "https://api.chapa.co/v1/transaction/initialize",
    {
      amount: data.amount,
      currency: "ETB",
      email: data.email,
      tx_ref: txRef,
      callback_url: `${process.env.NEXTAUTH_URL}/enroll/success`,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.CHAPA_SECRET}`,
      },
    }
  );

  return new Response(JSON.stringify(response.data), { status: 200 });
}
