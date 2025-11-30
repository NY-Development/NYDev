import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  await connectDB();
  const data = await req.json();

  const contact = await Contact.create(data);

  return new Response(JSON.stringify(contact), { status: 201 });
}
