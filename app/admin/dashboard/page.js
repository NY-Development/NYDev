// "use client";
// import { useSession, signOut } from "next-auth/react";
// import { Loader2, AlertTriangle, LogOut } from "lucide-react";
// // You will also need a database/API call to fetch the form data here

// export default function AdminDashboard() {
//   const { data: session, status } = useSession();
//   const isLoading = status === "loading";
  
//   // NOTE: You'll need to wrap your entire app in <SessionProvider> in your layout.js or root file

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
//       </div>
//     );
//   }

//   if (status === "unauthenticated" || session.user.email !== 'yamlaknegash96@gmail.com') {
//     // Redirect to the custom login page or show an error
//     return (
//       <div className="text-center py-20">
//         <AlertTriangle className="w-12 h-12 mx-auto text-red-500" />
//         <h2 className="text-xl font-bold mt-4">Access Denied</h2>
//         <p>Please log in with the authorized email.</p>
//         {/* You'd typically use signIn('google') here or redirect to /admin/login */}
//       </div>
//     );
//   }

//   // --- Admin Content (Only for authorized user) ---
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16">
//       <div className="flex justify-between items-center mb-10 border-b pb-4">
//         <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//         <button
//           onClick={() => signOut()}
//           className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
//         >
//           <LogOut className="w-5 h-5 mr-2" />
//           Sign Out
//         </button>
//       </div>

//       <p className="mb-8">Welcome, {session.user.name}. Here is the list of enrollment forms and support requests.</p>

//       {/* TODO: 
//         1. Fetch enrollment data from your backend (the data submitted via /api/enroll)
//         2. Map over the data to display a table of enrollments (Name, Course, Plan, Price, Status)
//       */}
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
//         <h2 className="text-2xl font-semibold mb-4">New Enrollments</h2>
//         <p className="text-gray-500">Feature coming soon: Display table of submitted data.</p>
//       </div>
//     </div>
//   );
// }

"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { Loader2, AlertTriangle, LogOut, Copy, CheckCheck } from "lucide-react";
import Link from "next/link";
import {toast} from "react-toastify";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [inviteLink, setInviteLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  if (status === "unauthenticated" || session.user.role !== "admin") {
    return (
      <div className="text-center py-20">
        <AlertTriangle className="w-12 h-12 mx-auto text-red-500" />
        <h2 className="text-xl font-bold m-4">Access Denied</h2>
        <p>Please <Link href="/adlogin" className="border-2 rounded-2xl px-2 py-1 m-1 bg-indigo-500 shadow-2xl animate-bounce">log in</Link> with an admin account.</p>
      </div>
    );
  }

  async function generateInvite() {
    setLoading(true);
    const res = await fetch("/api/admin/invite/create", { method: "POST" });
    const data = await res.json();
    setInviteLink(data.link);
    setLoading(false);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 h-screen">
      <div className="flex justify-between items-center mb-10 border-b pb-4">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <button
          onClick={() => signOut()}
          className="cp flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-red-600 transition duration-300"
        >
          <LogOut className="mr-2" />
          Logout
        </button>
      </div>

      {/* Invite Section */}
      <div className="border p-6 rounded-xl shadow-md bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">Invite New Member</h2>

        <button
          onClick={generateInvite}
          disabled={loading}
          className="cp bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-white hover:text-indigo-600 transition duration-300"
        >
          {loading ? "Generating..." : "Generate Invitation Link"}
        </button>

        {inviteLink && (
          <div className="mt-4 flex items-center bg-gray-700 p-3 rounded-md">
            <input
              type="text"
              value={inviteLink}
              readOnly
              className="flex-1 bg-transparent"
            />
            <button
              onClick={() => {navigator.clipboard.writeText(inviteLink)
                toast.success("Invite link copied to clipboard!");
                setCopied(true);
                setTimeout(() => setCopied(false), 5000);
              }}
              className="cp ml-3 bg-gray-900 p-2 rounded"
            >
              {copied ? <CheckCheck /> : <Copy />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}