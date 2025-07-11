"use client";
import React, { useState } from "react";

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center py-10 w-full">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 rounded-xl p-8 w-full max-w-lg shadow flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#2A3B8F] text-white font-bold py-3 rounded hover:bg-[#1a265c] transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && <p className="text-green-600 font-semibold">Message sent successfully!</p>}
        {status === "error" && <p className="text-red-600 font-semibold">Something went wrong. Please try again.</p>}
      </form>
    </section>
  );
};