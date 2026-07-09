import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              CSE (Data Science)
            </h2>

            <p className="text-gray-300 leading-7">
              Department of Computer Science &
              Engineering (Data Science),
              University of Engineering &
              Management, Kolkata.
            </p>
          </div>

        
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About
                </a>
              </li>

              <li>
                <a href="#events" className="hover:text-yellow-400">
                  Events
                </a>
              </li>

              <li>
                <a href="#programs" className="hover:text-yellow-400">
                  Programs
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Contact
            </h3>

            <p className="mb-3 text-gray-300">
              University of Engineering &
              Management
            </p>

            <p className="mb-3 text-gray-300">
              New Town, Kolkata,
              West Bengal - 700160
            </p>

            <p className="mb-3 text-gray-300">
              Email:
              <br />
              uemk.cseds.71025@gmail.com
            </p>

            <p className="text-gray-300">
              Phone:
              <br />
              +91 33 2357 2995
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="rounded-full bg-blue-800 p-3 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full bg-blue-800 p-3 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full bg-blue-800 p-3 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="rounded-full bg-blue-800 p-3 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

        </div>

        <hr className="my-8 border-blue-800" />

        <div className="text-center text-gray-400">
          © {new Date().getFullYear()} Department of Computer Science &
          Engineering (Data Science) | University of Engineering &
          Management, Kolkata. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;