import uemLogo from "../assets/images/uem-logo.png";
import cseLogo from "../assets/images/cse-logo.jpeg";
import heroImage from "../assets/images/hero.jpeg";

export default function Hero() {
  return (
    <header
      className="relative min-h-[220px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#051a54]/95 via-[#0a2d6f]/90 to-[#1d66d8]/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-10 py-6 gap-5">

        <img
          src={uemLogo}
          alt="UEM Logo"
          className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white p-2 object-contain"
        />

        <div className="text-center text-white">
          <h1 className="text-2xl md:text-5xl font-bold">
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
  );
}