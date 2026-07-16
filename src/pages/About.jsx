import visionImg from "../assets/images/vision.jpg";
import missionImg from "../assets/images/mission.jpg";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const outcomes = [
    "Strong Programming & Software Development Skills",
    "Data Analytics & Machine Learning Knowledge",
    "Problem Solving & Critical Thinking",
    "Artificial Intelligence & Cloud Computing",
    "Research, Innovation & Entrepreneurship",
    "Professional Ethics & Teamwork",
  ];

  return (
    <>
      {/* Banner */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-bold">About Department</h1>

          <p className="mt-4 text-lg">
            Department of Computer Science & Engineering (Data Science)
          </p>
        </div>
      </section>

      {/* About Department */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0b3d91]">
              About the Department
            </h2>

            <div className="w-24 h-1 bg-[#0b3d91] mx-auto mt-4 rounded-full"></div>

            <p className="mt-8 text-lg text-gray-700 leading-8 max-w-5xl mx-auto">
              The Department of Computer Science & Engineering (Data Science)
              offers a modern curriculum that combines Computer Science
              fundamentals with Artificial Intelligence, Machine Learning,
              Data Analytics, Cloud Computing and Big Data technologies.
              The department emphasizes practical learning, innovation,
              research, industry collaboration and project-based education to
              prepare students for successful careers in emerging technologies.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Vision */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl border border-blue-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <img
                src={visionImg}
                alt="Vision"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-4xl font-bold text-center text-[#0b3d91] uppercase">
                  Vision
                </h3>

                <div className="w-24 h-1 bg-[#0b3d91] mx-auto mt-4 rounded-full"></div>

                <p className="mt-8 text-gray-700 leading-9 text-lg">
                  The Department of Computer Science & Engineering (Data
                  Science) strives to become a centre of excellence in
                  education, research and innovation by producing globally
                  competent professionals with strong technical knowledge,
                  ethical values and leadership qualities.

                  <br /><br />

                  The department aims to nurture creativity, encourage
                  interdisciplinary research and develop data-driven solutions
                  that contribute towards society and industry.
                </p>

              </div>

            </div>

            {/* Mission */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl border border-blue-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <img
                src={missionImg}
                alt="Mission"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-4xl font-bold text-center text-[#0b3d91] uppercase">
                  Mission
                </h3>

                <div className="w-24 h-1 bg-[#0b3d91] mx-auto mt-4 rounded-full"></div>

                <div className="mt-8 space-y-6 text-gray-700 text-lg leading-9">

                  <p>
                    • Provide quality education through an industry-oriented
                    curriculum focused on modern computing technologies.
                  </p>

                  <p>
                    • Promote research, innovation, entrepreneurship and
                    lifelong learning among students and faculty.
                  </p>

                  <p>
                    • Strengthen collaboration with industries and research
                    organizations through internships, projects and technical
                    activities.
                  </p>

                  <p>
                    • Develop socially responsible professionals with strong
                    ethical values, leadership skills and global competence.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Student Outcomes */}
          <div className="mt-20">

            <div className="text-center mb-12">

              <h2 className="text-4xl font-bold text-[#0b3d91]">
                Student Outcomes
              </h2>

              <div className="w-24 h-1 bg-[#0b3d91] mx-auto mt-4 rounded-full"></div>

              <p className="mt-6 text-gray-600 text-lg">
                The department aims to develop graduates with strong technical,
                analytical and professional competencies.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {outcomes.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl bg-white border border-blue-100 p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-700 hover:shadow-2xl"
                >
                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-white">
                      <CheckCircle2 size={24} />
                    </div>

                    <h3 className="text-lg font-semibold text-[#0b3d91]">
                      {item}
                    </h3>

                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </>
  );
}