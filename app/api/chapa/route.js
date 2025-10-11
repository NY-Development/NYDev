import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const { tx_ref, status } = body;

    if (!tx_ref) {
      return Response.json({ message: "No transaction reference" }, { status: 400 });
    }

    // Verify with Chapa
    const verify = await axios.get(
      `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        },
      }
    );

    if (verify.data.status === "success" && verify.data.data.status === "success") {
      console.log("✅ Payment successful for tx_ref:", tx_ref);
      return Response.json({ success: true, message: "Payment verified successfully" });
    } else {
      return Response.json({ success: false, message: "Payment not verified" });
    }
  } catch (error) {
    console.error("Verification error:", error.response?.data || error.message);
    return Response.json({ message: "Error verifying payment" }, { status: 500 });
  }
}
