"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (res.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/admin/dashboard"); // after login redirect
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-gray-900 shadow-xl p-10 rounded-xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 mb-4 rounded-md text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full border p-3 rounded-md"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full border p-3 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="cp w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}