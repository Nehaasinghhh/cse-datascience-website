
import React from "react";
import {
  GraduationCap,
  Briefcase,
  Brain,
  Award,
} from "lucide-react";

import hodImage from "../assets/images/hod_img.jpeg";

export default function HodMessage() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-900">
            Message from the Head of the Department
          </h2>

          <div className="w-24 h-1 bg-blue-900 mx-auto mt-4 rounded-full"></div>

          <p className="mt-5 text-gray-600 text-lg">
            Department of Computer Science & Engineering (Data Science)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="bg-blue-900 rounded-3xl p-8 text-white shadow-xl border border-blue-900 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

            <div className="overflow-hidden rounded-2xl mb-8">
              <img
                src={hodImage}
                alt="HOD"
                className="w-full h-[420px] object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <h3 className="text-3xl font-bold">
              Prof. Dr. Nilanjan Chatterjee.
            </h3>

            <p className="text-blue-100 mt-2">
              Head of the Department
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">
                <GraduationCap size={24} />
                <span>Ph.D. in Computer Science</span>
              </div>

              <div className="flex items-center gap-4">
                <Briefcase size={24} />
                <span>15+ Years Teaching Experience</span>
              </div>

              <div className="flex items-center gap-4">
                <Brain size={24} />
                <span>
                  Artificial Intelligence & Data Analytics
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Award size={24} />
                <span>Researcher & Academic Mentor</span>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl border border-blue-100 shadow-xl p-10 transition-all duration-300 hover:-translate-y-3 hover:border-blue-900 hover:shadow-2xl">

            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Welcome Message
            </h3>

            <p className="text-gray-700 leading-8 text-justify mb-6">
              Welcome to the Department of Computer Science &
              Engineering (Data Science) at the University of
              Engineering and Management, Kolkata.
            </p>

            <p className="text-gray-700 leading-8 text-justify mb-6">
              Our department is dedicated to delivering quality
              education by combining strong theoretical knowledge
              with practical exposure in Artificial Intelligence,
              Machine Learning, Data Analytics, Big Data,
              Cloud Computing and emerging technologies.
            </p>

            <p className="text-gray-700 leading-8 text-justify mb-6">
              We encourage students to participate actively in
              research, innovation, industrial projects,
              technical workshops, hackathons and professional
              development activities that prepare them to become
              successful engineers and future leaders.
            </p>

            <p className="text-gray-700 leading-8 text-justify">
              I invite every aspiring student to become a part
              of our vibrant academic community and contribute
              towards creating innovative solutions for society.
              Together, let us strive for excellence in learning,
              research and innovation.
            </p>

            <div className="mt-10 border-l-4 border-blue-900 pl-6 italic text-blue-900 text-lg font-medium">
              "Education inspires innovation, builds character
              and creates future leaders."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}