import connectDB from "../../../lib/db";
import Member from "../../../models/Member";

export async function GET() {
  await connectDB();

  const members = await Member.find().sort({ createdAt: -1 });

  return new Response(
    JSON.stringify({ members }),
    { status: 200 }
  );
}
