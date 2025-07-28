"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto bg-white py-10 px-[35px] rounded-lg shadow-sm font-poppins w-[40%]">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-[25px]">
        <h2 className="text-4xl font-semibold text-black">Send us a message</h2>
        <p className="text-[#21272A] text-lg">
          We&apos;re here to assist you and look forward to hearing from you.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-[25px]">
        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-sm"
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-sm"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter message"
            rows={4}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-sm resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          variant="default"
          type="submit"
          disabled={isSubmitting}
          className="w-full text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
