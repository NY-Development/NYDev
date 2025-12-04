// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";

// export default function EnrollMemberPage() {
//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");

//   const [form, setForm] = useState({
//     fullName: "",
//     role: "",
//     bio: "",
//     facebook: "",
//     instagram: "",
//     linkedin: "",
//     github: "",
//     YouTube: "",
//     telegram: "",
//     website: "",
//     x: "",
//     photo: null,
//   });

//   const [preview, setPreview] = useState(null);
//   const [status, setStatus] = useState({ loading: false, error: "", success: "" });

//   useEffect(() => {
//     if (!token) {
//       setStatus({ ...status, error: "Invalid or missing invitation token." });
//     }
//   }, [token]);

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     setForm({ ...form, photo: file });

//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ loading: true, error: "", success: "" });

//     try {
//       const formData = new FormData();

//       formData.append("token", token);
//       formData.append("fullName", form.fullName);
//       formData.append("role", form.role);
//       formData.append("bio", form.bio);
//       formData.append("facebook", form.facebook);
//       formData.append("instagram", form.instagram);
//       formData.append("linkedin", form.linkedin);
//       if (form.photo) formData.append("photo", form.photo);

//       const res = await fetch("/api/members/enroll", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setStatus({ loading: false, success: "", error: data.message });
//         return;
//       }

//       setStatus({ loading: false, error: "", success: "Enrollment successful! You are now a member." });
//     } catch (error) {
//       setStatus({ loading: false, success: "", error: "Something went wrong. Please try again." });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex justify-center items-center p-6">
//       <div className="bg-gradient-to-br from-black to-blue-900 w-full border-2  max-w-xl shadow-lg rounded-xl p-8">
//         <h1 className="text-2xl font-bold mb-6 text-center">Member Enrollment</h1>
//         <h2 className="text-center animate-pulse">This link/page will <span className="text-red-500">expire</span> after 1 hour.</h2>
//         {/* Show ERROR */}
//         {status.error && (
//           <div className="bg-red-900 text-red-700 p-3 rounded-md mb-4 text-center">
//             {status.error}
//           </div>
//         )}

//         {/* Show SUCCESS */}
//         {status.success && (
//           <div className="bg-green-900 text-green-700 p-3 rounded-md mb-4 text-center">
//             {status.success}
//           </div>
//         )}

//         {/* If no token → disable form */}
//         {!token ? (
//           <p className="text-center text-gray-600">Invalid token. Contact the admin.</p>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Full Name */}
//             <div>
//               <label className="block font-medium mb-1">Full Name</label>
//               <input
//                 type="text"
//                 className="w-full border p-3 rounded-md"
//                 value={form.fullName}
//                 onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//                 required
//               />
//             </div>

//             {/* Role */}
//             <div>
//               <label className="block font-medium mb-1">Role</label>
//               <input
//                 type="text"
//                 className="w-full border p-3 rounded-md"
//                 placeholder="e.g. Developer, Designer, Content Creator"
//                 value={form.role}
//                 onChange={(e) => setForm({ ...form, role: e.target.value })}
//                 required
//               />
//             </div>

//             {/* Bio */}
//             <div>
//               <label className="block font-medium mb-1">Bio</label>
//               <textarea
//                 className="w-full border p-3 rounded-md"
//                 rows="4"
//                 value={form.bio}
//                 onChange={(e) => setForm({ ...form, bio: e.target.value })}
//                 required
//                 placeholder="Say something about yourself"
//               ></textarea>
//             </div>

//             {/* Social Links */}
//             <div className="flex flex-col space-y-2">
//               <label className="block font-medium mb-1">Social Links</label>

//               <input
//                 type="text"
//                 className="w-full border p-3 rounded-md"
//                 placeholder="Facebook profile URL"
//                 value={form.facebook}
//                 onChange={(e) => setForm({ ...form, facebook: e.target.value })}
//               />

//               <input
//                 type="text"
//                 className="w-full border p-3 rounded-md"
//                 placeholder="Instagram profile URL"
//                 value={form.instagram}
//                 onChange={(e) => setForm({ ...form, instagram: e.target.value })}
//               />

//               <input
//                 type="text"
//                 className="w-full border p-3 rounded-md"
//                 placeholder="LinkedIn profile URL"
//                 value={form.linkedin}
//                 onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
//               />

//               <input
//                 type="text"
//                 className="w-full border p-3 rounded-md"
//                 placeholder="GitHub profile URL"
//                 value={form.linkedin}
//                 onChange={(e) => setForm({ ...form, github: e.target.value })}
//                 required
//               />

//               <input
//                 type="text"
//                 className="w-full border p-3 rounded-md"
//                 placeholder="YouTube profile URL"
//                 value={form.linkedin}
//                 onChange={(e) => setForm({ ...form, YouTube: e.target.value })}
//               />

//               <input
//                 type="text"
//                 className="w-full border p-3 rounded-md"
//                 placeholder="Telegram profile URL"
//                 value={form.linkedin}
//                 onChange={(e) => setForm({ ...form, telegram: e.target.value })}
//                 required
//               />

//               <input
//                 type="text"
//                 className="w-full border p-3 rounded-md"
//                 placeholder="Portfolio profile URL"
//                 value={form.linkedin}
//                 onChange={(e) => setForm({ ...form, website: e.target.value })}
//               />

//               <input
//                 type="text"
//                 className="w-full border p-3 rounded-md"
//                 placeholder="Twitter profile URL"
//                 value={form.linkedin}
//                 onChange={(e) => setForm({ ...form, x: e.target.value })}
//               />
//             </div>

//             {/* Photo Upload */}
//             <div>
//               <label className="block font-medium mb-1">Profile Photo</label>

//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handlePhotoChange}
//                 className="w-full border-2 p-3 text-center rounded-md cp"
//                 placeholder="Click here to insert Profile Picture"
//                 required
//               />

//               {/* Preview */}
//               {preview && (
//                 <img
//                   src={preview}
//                   alt="Preview"
//                   className="w-32 h-32 mt-3 rounded-full object-cover"
//                 />
//               )}
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="cp w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700"
//               disabled={status.loading}
//             >
//               {status.loading ? "Submitting..." : "Submit Enrollment"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

import { Suspense } from "react";
import EnrollMemberClient from "./EnrollMemberClient";

export default function EnrollMemberPage() {
  return (
    <Suspense fallback={<div className="text-white p-6">Loading...</div>}>
      <EnrollMemberClient />
    </Suspense>
  );
}
