import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#072c68] shadow-lg border-t border-white/20">

      <div className="max-w-7xl mx-auto px-5">

        {/* Mobile Button */}
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
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "transition hover:text-blue-300"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "transition hover:text-blue-300"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/programs"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "transition hover:text-blue-300"
              }
            >
              Programs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/events"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "transition hover:text-blue-300"
              }
            >
              Events
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "transition hover:text-blue-300"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

      </div>

    </nav>
  );
}