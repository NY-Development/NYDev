import connectDB from "@/lib/mongodb";
import InviteLink from "@/models/InviteLink";
import Member from "@/models/Member";

export async function POST(req) {
  await connectDB();
  const { token, ...memberData } = await req.json();

  const invite = await InviteLink.findOne({ token });

  if (!invite || invite.used || invite.expiresAt < new Date()) {
    return new Response(JSON.stringify({ error: "Invalid or expired link" }), { status: 400 });
  }

  // Save member info
  await Member.create(memberData);

  invite.used = true;
  await invite.save();

  return new Response(JSON.stringify({ message: "Member added successfully" }), { status: 201 });
}
