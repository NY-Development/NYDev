import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/mongodb";
import Project from "../../../models/Project";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  await connectDB();
  const data = await req.json();
  const project = await Project.create(data);

  return new Response(JSON.stringify(project), { status: 201 });
}

export async function GET() {
  await connectDB();
  const projects = await Project.find();
  return new Response(JSON.stringify(projects), { status: 200 });
}
