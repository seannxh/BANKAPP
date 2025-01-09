import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import video from "../../assets/background1.mp4";
import ClipLoader from "react-spinners/ClipLoader";

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
    <main className="flex-1 pt-[30px]">
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none" playsInline draggable="false"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="min-h-screen flex items-center justify-center py-12">
        {loading && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-40">
            <ClipLoader color="#ffffff" size={50} />
          </div>
        )}
        <div className="w-full max-w-sm px-6 py-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-center text-gray-700 mb-8">
            Have questions or need assistance? <br/>We're here to help.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-gray-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-900 to-gray-900 py-3 px-6 rounded-md text-white cursor-pointer text-center transform transition-transform duration-300 hover:scale-105"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {success && (
            <p className="text-center text-green-700 mt-4">
              Success! Thank you for contacting us. We will be in touch as soon as possible.
            </p>
          )}
        </div>
      </div>
    </div>
    </main>
  );
};

export default ContactUs;
