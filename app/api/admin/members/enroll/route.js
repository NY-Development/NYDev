

import connectDB from "../../../../lib/db";
import Member from "../../../../models/Member";

const socialKeys = [
  "linkedin",
  "github",
  "instagram",
  "youtube",
  "x",
  "facebook",
  "telegram",
  "website",
];

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch (err) {
    return new Response(
      JSON.stringify({ message: "Invalid JSON in request body", error: err.message }),
      { status: 400 }
    );
  }

  // Basic validation
  const name = body.fullName || body.name;
  const role = body.role;
  if (!name || !role) {
    return new Response(
      JSON.stringify({ message: "Missing required fields", missing: { name: !name, role: !role } }),
      { status: 400 }
    );
  }

  // Build links object from allowed social keys
  const links = {};
  socialKeys.forEach((key) => {
    if (body[key]) links[key] = body[key];
  });

  const photoUrl = body.photoUrl || null;

  try {
    await connectDB();
    const member = await Member.create({
      name,
      role,
      bio: body.bio || "",
      photoUrl,
      links,
      createdByInvite: true,
    });

    return new Response(
      JSON.stringify({ message: "Member enrolled successfully", member }),
      { status: 201 }
    );
  } catch (err) {
    // Log full error server-side, but return a concise error to the client.
    console.error("Enroll member error:", err);

    // Include minimal request reference details for debugging (non-sensitive)
    const requestRef = {
      path: "/api/admin/members/enroll",
      method: "POST",
      provided: {
        name: Boolean(name),
        role: Boolean(role),
      },
    };

    return new Response(
      JSON.stringify({ message: "Failed to enroll member", error: err.message, request: requestRef }),
      { status: 500 }
    );
  }
}