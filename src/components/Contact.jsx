import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-50 to-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-900">
            Contact Us
          </h2>
          <p className="mt-3 text-gray-600">
            We'd love to hear from you. Feel free to contact the Department of
            CSE (Data Science).
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="mb-6 text-2xl font-semibold text-blue-900">
              Send us a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-blue-600"
              ></textarea>

              <button
                className="w-full rounded-xl bg-blue-700 py-4 text-lg font-semibold text-white transition hover:bg-blue-900"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl bg-blue-900 p-8 text-white shadow-xl">

            <h3 className="mb-8 text-3xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-2xl text-white-400" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-200">
                    University of Engineering &
                    Management, Kolkata,
                    New Town, Kolkata,
                    West Bengal - 700160
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="mt-1 text-2xl text-white-400" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-200">
                    uemk.cseds.71025@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="mt-1 text-2xl text-white-400" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-200">
                    +91 33 2357 2995
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 overflow-hidden rounded-2xl">
              <iframe
                title="IEM Location"
                src="https://www.google.com/maps?q=University%20of%20Engineering%20and%20Management%20Kolkata&output=embed"
                width="100%"
                height="250"
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;