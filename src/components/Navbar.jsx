import { useState } from "react";
import uemLogo from "../assets/images/uem-logo.png";
import cseLogo from "../assets/images/cse-logo.jpeg";
import heroImage from "../assets/images/hero.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      <header
        className="relative min-h-[220px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-r from-[#051a54]/95 via-[#0a2d6f]/90 to-[#1d66d8]/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-between px-5 md:px-10 py-6 gap-5">

    
          <img
            src={uemLogo}
            alt="UEM Logo"
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white p-2 object-contain"
          />

          <div className="text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Department of CSE (Data Science)
            </h1>

            <p className="mt-2 font-semibold text-sm md:text-lg">
              University of Engineering and Management, Kolkata
            </p>
          </div>

          <img
            src={cseLogo}
            alt="Department Logo"
            className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white p-2 object-contain"
          />

        </div>
      </header>

      <nav className="sticky top-0 z-50 bg-[#072c68] shadow-lg border-t border-white/20">

        <div className="max-w-7xl mx-auto px-5">

       
          <div className="md:hidden flex justify-end py-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl"
            >
              ☰
            </button>
          </div>

          <ul
            className={`
              ${menuOpen ? "flex" : "hidden"}
              md:flex
              flex-col md:flex-row
              justify-center
              items-center
              gap-6 md:gap-16
              text-white
              font-semibold
              py-4
            `}
          >
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="transition duration-300 hover:text-blue-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#events"
                onClick={() => setMenuOpen(false)}
                className="transition duration-300 hover:text-blue-300"
              >
                Events
              </a>
            </li>

            <li>
              <a
                href="#programs"
                onClick={() => setMenuOpen(false)}
                className="transition duration-300 hover:text-blue-300"
              >
                Programs
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="transition duration-300 hover:text-blue-300"
              >
                Contact
              </a>
            </li>
          </ul>

        </div>

      </nav>
    </>
  );
}

export default Navbar;