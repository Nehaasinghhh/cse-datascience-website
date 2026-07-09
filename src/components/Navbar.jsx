import uemLogo from "../assets/images/uem-logo.png";
import cseLogo from "../assets/images/cse-logo.jpeg";
import heroImage from "../assets/images/hero.jpeg";

function Navbar() {
  return (
    <>

      <header
        className="relative h-[220px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
    
        <div className="absolute inset-0 bg-gradient-to-r from-[#051a54]/95 via-[#0a2d6f]/90 to-[#1d66d8]/50"></div>

      
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-between px-10">

    
          <img
            src={uemLogo}
            alt="UEM Logo"
          className="w-24 h-24 rounded-xl bg-white p-2 object-contain"
          />

   
          <div className="text-center text-white">

            <h1 className="text-5xl font-bold">
              Department of CSE (Data Science)
            </h1>

            <p className="mt-2 font- sbold text-lg">
              University of Engineering and Management, Kolkata
            </p>

          </div>
          <img
            src={cseLogo}
            alt="Department Logo"
            className="w-24 h-24 rounded-xl bg-white p-2 object-contain"
          />

        </div>
      </header>

      <nav className="bg-[#072c68] border-t border-white/20">

        <div className="max-w-7xl mx-auto">

          <ul className="flex justify-center gap-16 text-white font-bold h-14 items-center">

            <li>
              <a
                href="#about"
                className="hover:text-blue-300 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#events"
                className="hover:text-blue-300 transition"
              >
                Events
              </a>
            </li>

            <li>
              <a
                href="#programs"
                className="hover:text-blue-300 transition"
              >
                Programs
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-blue-300 transition"
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