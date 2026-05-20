"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// Replace these with your actual EmailJS keys
const EMAILJS_SERVICE_ID = "service_tjpe66v";
const EMAILJS_TEMPLATE_ID = "template_36y1ysb";
const EMAILJS_PUBLIC_KEY = "qCgwnDOfZEsAQ7969";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    phone: "",
    service: "Solar Installation",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const templateParams = {
        from_name: formData.from_name,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        reply_to: "jaholaomo@gmail.com", // The form doesn't collect email, so replies go here
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ from_name: "", phone: "", service: "Solar Installation", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try WhatsApp instead.");
    }
  };

  return (
    <div>
      {/* Success Message */}
      {status === "success" && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3 animate-fadeIn">
          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-green-800 font-semibold">Message Sent Successfully!</p>
            <p className="text-green-600 text-sm">
              Thank you! We'll get back to you shortly. For faster response, call{" "}
              <a href="tel:+2347035362804" className="underline font-semibold">
                0703 536 2804
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 animate-fadeIn">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-semibold">Failed to Send</p>
            <p className="text-red-600 text-sm">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="from_name">
            Full Name *
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            required
            value={formData.from_name}
            onChange={handleChange}
            disabled={status === "sending"}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all duration-300 hover:border-yellow-300 disabled:bg-gray-50 disabled:cursor-not-allowed"
            placeholder="Your full name"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            disabled={status === "sending"}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all duration-300 hover:border-yellow-300 disabled:bg-gray-50 disabled:cursor-not-allowed"
            placeholder="080X XXX XXXX"
          />
        </div>

        {/* Service Needed */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="service">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            disabled={status === "sending"}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all duration-300 bg-white hover:border-yellow-300 disabled:bg-gray-50 disabled:cursor-not-allowed"
          >
            <option>Solar Installation</option>
            <option>Electrical Works</option>
            <option>Maintenance / Repairs</option>
            <option>Consultation Only</option>
            <option>Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            disabled={status === "sending"}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all duration-300 hover:border-yellow-300 resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
            placeholder="Describe your project or need..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 bg-linear-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 w-full justify-center shadow-xl shadow-yellow-500/25 hover:shadow-yellow-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}