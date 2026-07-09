import { FileText } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="px-10 pt-10 pb-8"
    >

      <div className="flex items-center gap-5 mb-6">

        <div className="w-12 h-12 bg-[#0b3d91] rounded-lg flex items-center justify-center shadow-lg">

          <FileText size={22} color="white" />

        </div>

        <h2 className="text-4xl font-bold text-[#0b3d91]">
          About
        </h2>

      </div>


      <div className="ml-[68px]">

        <p className="text-gray-700 text-[17px] leading-8 text-justify">

          The Department of Computer Science & Engineering (Data Science)
          at the University of Engineering & Management, Kolkata,
          provides cutting-edge education and research in Data Science.

          Our mission is to foster innovation,
          encourage analytical thinking,
          and empower students to become leaders in industry
          and academia.

          We offer world-class laboratories,
          experienced faculty members,
          industry collaborations,
          workshops,
          internships,
          and research opportunities that create
          an excellent learning environment for future Data Scientists.

        </p>

      </div>

    </section>
  );
}

export default About;