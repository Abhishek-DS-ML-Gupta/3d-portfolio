import { useState, useRef } from "react";
import { FormEventHandler } from "react";

// Replace with your actual Formspree form ID
const FORMSPREE_FORM_ID = "xpwdvrkz"; // Get this from Formspree.io

interface ContactFormProps {
  handleBlur: () => void;
  handleFocus: () => void;
}

export const ContactForm = ({
  handleBlur,
  handleFocus,
}: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(formRef.current!);
      
      // Send form data to Formspree
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Reset form on success
        formRef.current?.reset();
        alert("Message sent successfully! I'll get back to you soon.");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex-1 min-w-[50%] flex flex-col px-6 py-10 bg-white rounded-2xl shadow-xl border border-gray-200 transition-all duration-300">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10">
        Get in Touch
      </h1>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-7"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-700 font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="John Doe"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-700 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-gray-700 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full py-3 rounded-xl text-white font-semibold text-lg transition-all duration-200 ${
            isLoading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
          } shadow-md hover:shadow-lg`}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};
