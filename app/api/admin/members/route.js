import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/mongodb";
import Member from "../../../models/Member";

export async function GET() {
  await connectDB();
  const members = await Member.find();
  return new Response(JSON.stringify(members));
}
