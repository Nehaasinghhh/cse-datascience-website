import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Get in touch with the Department of Computer Science &
            Engineering (Data Science), University of Engineering &
            Management, Kolkata.
          </p>
        </div>
      </section>

      {/* Contact Section */}
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
              We'd love to hear from you. Feel free to contact the Department
              of CSE (Data Science).
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">

            {/* Contact Form */}
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-700 hover:shadow-2xl">

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

            {/* Contact Information */}
            <div className="rounded-3xl bg-blue-900 p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <h3 className="mb-8 text-3xl font-bold">
                Contact Information
              </h3>

              <div className="space-y-8">

                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="mt-1 text-2xl" />

                  <div>
                    <h4 className="font-semibold">Address</h4>

                    <p className="text-gray-200">
                      University of Engineering & Management,
                      <br />
                      New Town, Kolkata,
                      <br />
                      West Bengal - 700160
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaEnvelope className="mt-1 text-2xl" />

                  <div>
                    <h4 className="font-semibold">Email</h4>

                    <p className="text-gray-200">
                      uemk.cseds.71025@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaPhoneAlt className="mt-1 text-2xl" />

                  <div>
                    <h4 className="font-semibold">Phone</h4>

                    <p className="text-gray-200">
                      +91 33 2357 2995
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-10 overflow-hidden rounded-2xl border-2 border-white/20">

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

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Contact;