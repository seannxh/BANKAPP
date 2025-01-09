import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_x9p1m6d", "template_11ni011", form.current, {
        publicKey: "wdB1IvZQVrkij5h20",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };


  return (
    <div
      id="contactus"
      className="mt-40 flex flex-col items-center justify-center py-10 px-4 bg-gray-100 min-h-screen"
    >
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
        Contact Us
      </h1>
      <p className="max-w-4xl text-center text-gray-900 mb-12">
        Have questions or need assistance? Feel free to reach out to us! We're
        here to help.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md border border-gray-900"
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-gray-900 to-gray-900 py-3 px-6 rounded-md text-white cursor-pointer text-center transform transition-transform duration-300 hover:scale-105 w-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
        {success && (
          <p className="text-center text-green-800 mt-4">
            Success! Thank you for contacting us. We will be in touch as soon as possible.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
