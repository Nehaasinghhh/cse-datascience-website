import { useState } from "react";
import { NavLink } from "react-router-dom";
import uemLogo from "../assets/images/uem-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex items-center justify-between h-20">

          {/* Logo + Department */}
          <div className="flex items-center gap-4">
            <img
              src={uemLogo}
              alt="UEM Logo"
              className="h-14 w-14 object-contain"
            />

            <div className="hidden sm:block">
              <h2 className="text-xl font-bold text-[#072c68]">
                Department of CSE (Data Science)
              </h2>

              
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 font-semibold text-[#072c68]">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                    : "hover:text-blue-700 transition"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                    : "hover:text-blue-700 transition"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/programs"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                    : "hover:text-blue-700 transition"
                }
              >
                Programs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                    : "hover:text-blue-700 transition"
                }
              >
                Events
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                    : "hover:text-blue-700 transition"
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-[#072c68]"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-5 py-5 border-t border-gray-200 font-semibold text-[#072c68]">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700"
            >
              About
            </NavLink>

            <NavLink
              to="/programs"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700"
            >
              Programs
            </NavLink>

            <NavLink
              to="/events"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700"
            >
              Events
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700"
            >
              Contact
            </NavLink>

          </ul>
        )}

      </div>
    </nav>
  );
}