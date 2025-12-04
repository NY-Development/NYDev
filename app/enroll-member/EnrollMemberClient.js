"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function EnrollMemberClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [form, setForm] = useState({
    fullName: "",
    role: "",
    bio: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    github: "",
    YouTube: "",
    telegram: "",
    website: "",
    x: "",
    photo: null,
  });

  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  useEffect(() => {
    setStatus((prev) => ({
      ...prev,
      error: token ? "" : "Invalid or missing invitation token.",
    }));
  }, [token]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, photo: file });

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const formData = new FormData();
      formData.append("token", token);
      formData.append("fullName", form.fullName);
      formData.append("role", form.role);
      formData.append("bio", form.bio);
      formData.append("facebook", form.facebook);
      formData.append("instagram", form.instagram);
      formData.append("linkedin", form.linkedin);
      if (form.photo) formData.append("photo", form.photo);

      const res = await fetch("/api/members/enroll", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({
          loading: false,
          success: "",
          error: data.message,
        });
        return;
      }

      setStatus({
        loading: false,
        error: "",
        success: "Enrollment successful! You are now a member.",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-6">
      <div className="bg-gradient-to-br from-black to-blue-900 w-full border-2  max-w-xl shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Member Enrollment</h1>
        <h2 className="text-center animate-pulse">
          This link/page will <span className="text-red-500">expire</span> after 1 hour.
        </h2>

        {status.error && (
          <div className="bg-red-900 text-red-700 p-3 rounded-md mb-4 text-center">
            {status.error}
          </div>
        )}

        {status.success && (
          <div className="bg-green-900 text-green-700 p-3 rounded-md mb-4 text-center">
            {status.success}
          </div>
        )}

        {!token ? (
          <p className="text-center text-gray-600">Invalid token. Contact the admin.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border p-3 rounded-md"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Role</label>
              <input
                type="text"
                className="w-full border p-3 rounded-md"
                placeholder="e.g. Developer, Designer, Content Creator"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Bio</label>
              <textarea
                className="w-full border p-3 rounded-md"
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Upload Photo</label>
              <input type="file" accept="image/*" onChange={handlePhotoChange} />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 rounded-full mt-2 object-cover"
                />
              )}
            </div>

            <button
              disabled={status.loading}
              className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-md text-white font-bold"
            >
              {status.loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
