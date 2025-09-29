import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { cntct, socials } from "../data/contactData";

// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage() {
  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = formRef.current || e.target;
    const button =
      form.querySelector("button[type='submit']") ||
      e.nativeEvent?.submitter ||
      document.activeElement;

    const originalText = button?.textContent || "Send Message";

    if (button) {
      button.textContent = "Sending...";
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
    }

    try {
      // 1. Send to YOU
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. Send auto-reply to USER
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!", { position: "top-center" });

      if (button) button.textContent = "Message Sent!";

      setTimeout(() => {
        if (button) {
          button.textContent = originalText;
          button.disabled = false;
          button.removeAttribute("aria-busy");
        }
        form.reset();
      }, 2000);
    } catch (err) {
      console.error("EmailJS send error:", err);
      toast.error("Failed to send message. Please try again.", {
        position: "bottom-center",
      });

      if (button) {
        button.textContent = originalText;
        button.disabled = false;
        button.removeAttribute("aria-busy");
      }
    }
  };

  return (
    <div className="min-h-screen px-4 py-16 mx-auto max-w-7xl">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Title */}
      <h2 className="text-center title-text md:text-left">
        Get In <span className="text-primary">Touch</span>
      </h2>

      <div className="flex flex-col-reverse items-center gap-12 mt-10 text-white md:flex-row md:items-start md:gap-20">
        {/* Left Content */}
        <div className="flex flex-col w-full gap-8 md:w-1/2">
          {cntct.map((c, indx) => (
            <div className="flex items-center gap-4" key={indx}>
              <FontAwesomeIcon
                icon={c.icon}
                className="
    w-8 h-8 p-2
    text-white border border-blue-400 rounded-full shadow-lg
    bg-gradient-to-r from-blue-600 to-cyan-500 
    hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
    transition-all duration-150 text-center
  "
              />

              <div>
                <p className="text-sm font-semibold">{c.title}</p>
                <p className="text-xs text-gray-300">{c.subtitle}</p>
              </div>
            </div>
          ))}

          {/* Socials */}
          <div className="flex justify-center gap-4 mt-4 sm:gap-5 md:gap-6 sm:mt-5 md:mt-6 md:justify-start">
            {socials.map((s, indx) => (
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                key={indx}
              >
                <FontAwesomeIcon
                  icon={s.icon}
                  className="
    w-8 h-8 p-2
    text-white border border-blue-400 rounded-full shadow-lg
    bg-gradient-to-r from-blue-600 to-cyan-500 
    hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
    transition-transform duration-200 hover:scale-125 ease-in-out
  "
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2">
          <div className="w-full p-8 bg-[#1a1a27] rounded-2xl shadow-lg">
            <form ref={formRef} onSubmit={sendEmail}>
              {/* Subject */}
              <div className="relative mb-6">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder=" "
                  required
                  className="peer w-full px-3 py-2 text-white bg-[#13131c] rounded-md border border-gray-700
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200
                     peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
                     peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs
                     peer-focus:text-blue-500 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-blue-500 bg-[#13131c] px-1"
                >
                  Subject
                </label>
              </div>

              {/* Name */}
              <div className="relative mb-4">
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder=" "
                  required
                  className="peer w-full px-3 py-2 text-white bg-[#13131c] rounded-md border border-gray-700
               focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="user_name"
                  className="absolute left-3 top-2 text-sm font-semibold text-gray-200 transition-all duration-200
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
               peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-500
               peer-valid:-top-3 peer-valid:text-xs peer-valid:text-blue-500 bg-[#13131c] px-1"
                >
                  Enter your name
                </label>
              </div>

              {/* Email */}
              <div className="relative mb-4">
                <input
                  type="text"
                  id="user_email"
                  name="user_email"
                  placeholder=" "
                  required
                  className="peer w-full px-3 py-2 text-white bg-[#13131c] rounded-md border border-gray-700
               focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="user_email"
                  className="absolute left-3 top-2 text-sm font-semibold text-gray-200 transition-all duration-200
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
               peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-500
               peer-valid:-top-3 peer-valid:text-xs peer-valid:text-blue-500 bg-[#13131c] px-1"
                >
                  Email
                </label>
              </div>

              {/* Message */}
              <div className="relative mb-6">
                <textarea
                  id="user_message"
                  name="user_message"
                  rows="4"
                  placeholder=" "
                  required
                  className="peer w-full px-3 py-2 text-white bg-[#13131c] rounded-md border border-gray-700
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <label
                  htmlFor="user_message"
                  className="absolute left-3 top-2 text-sm font-semibold text-gray-200 transition-all duration-200
                     peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
                     peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs
                     peer-focus:text-blue-500 bg-[#13131c] px-1 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-blue-500"
                >
                  Write your message...
                </label>
              </div>

              {/* Hidden field for time */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full px-6 py-2 font-medium text-white transition-all duration-300 rounded-full shadow-md md:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
