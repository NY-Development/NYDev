import crypto from "crypto";
import connectDB from "@/lib/mongodb";
import InviteLink from "@/models/InviteLink";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin")
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });

  await connectDB();

  const token = crypto.randomBytes(20).toString("hex");

  const invite = await InviteLink.create({
    token,
    expiresAt: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
  });

  return new Response(JSON.stringify({
    link: `${process.env.NEXTAUTH_URL}/enroll-member?token=${invite.token}`
  }));
}
