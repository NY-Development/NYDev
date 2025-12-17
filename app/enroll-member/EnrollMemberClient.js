"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import SocialInput from "../components/SocialInput";
import {SOCIAL_PLATFORMS} from "../data/courseData";
import { generateSocialLinks } from "../utils/generateLinks";

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
    youtube: "",
    telegram: "",
    x: "",
    photo: null,
  });

  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  /* ---------------------------
     Token validation
  ---------------------------- */
  useEffect(() => {
    if (!token) {
      setStatus((prev) => ({
        ...prev,
        error: "Invalid or missing invitation token.",
      }));
    }
  }, [token]);

  /* ---------------------------
     Photo handler
  ---------------------------- */
  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setForm((prev) => ({ ...prev, photo: file }));
    setPreview(URL.createObjectURL(file));
  };

  /* ---------------------------
     Social input handler
  ---------------------------- */
  const handleSocialChange = (platform, value) => {
    setForm((prev) => ({
      ...prev,
      [platform]: value.replace("@", ""),
    }));
  };

  /* ---------------------------
     Submit handler
  ---------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const formData = new FormData();

      formData.append("token", token);
      formData.append("fullName", form.fullName);
      formData.append("role", form.role);
      formData.append("bio", form.bio);

      const socialLinks = generateSocialLinks(form);
      Object.entries(socialLinks).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (form.photo) {
        formData.append("photo", form.photo);
      }

      const res = await fetch("/api/members/enroll", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Enrollment failed.");
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
        error: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  /* ---------------------------
     UI
  ---------------------------- */
  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-6">
      <div className="bg-gradient-to-br from-black to-blue-900 w-full max-w-xl border-2 shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Member Enrollment
        </h1>

        <p className="text-center text-sm mb-6 animate-pulse">
          This invitation link will{" "}
          <span className="text-red-500 font-semibold">expire after 1 hour</span>.
        </p>

        {status.error && (
          <div className="bg-red-900 text-red-300 p-3 rounded-md mb-4 text-center">
            {status.error}
          </div>
        )}

        {status.success && (
          <div className="bg-green-900 text-green-300 p-3 rounded-md mb-4 text-center">
            {status.success}
          </div>
        )}

        {!token ? (
          <p className="text-center text-gray-400">
            Invalid token. Please contact the administrator.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border p-3 rounded-md bg-black text-white"
                value={form.fullName}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, fullName: e.target.value }))
                }
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="block font-medium mb-1">Role</label>
              <input
                type="text"
                className="w-full border p-3 rounded-md bg-black text-white"
                placeholder="e.g. Developer, Designer, Content Creator"
                value={form.role}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, role: e.target.value }))
                }
                required
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block font-medium mb-1">Bio</label>
              <textarea
                className="w-full border p-3 rounded-md bg-black text-white"
                rows={4}
                value={form.bio}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, bio: e.target.value }))
                }
              />
            </div>

            {/* Social Media Inputs */}
            <div className="space-y-4">
              {Object.keys(SOCIAL_PLATFORMS).map((platform) => (
                <SocialInput
                  key={platform}
                  platform={platform}
                  value={form[platform]}
                  onChange={handleSocialChange}
                />
              ))}
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block font-medium mb-1">Upload Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="text-sm"
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-28 h-28 rounded-full mt-3 object-cover border"
                />
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status.loading}
              className="cp w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-md text-white font-bold disabled:opacity-50"
            >
              {status.loading ? "Submitting..." : "Submit Enrollment"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
