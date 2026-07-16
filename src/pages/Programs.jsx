import {
  GraduationCap,
  FlaskConical,
  Briefcase,
  CheckCircle2,
  Cpu,
  Building2,
  Lightbulb,
  Rocket,
  Database,
  BrainCircuit,
  BarChart3,
  Code2,
} from "lucide-react";

import Footer from "../components/Footer";

export default function Programs() {
  return (
    <>
      {/* Banner */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Programs Offered
          </h1>

          <p className="mt-5 text-lg text-blue-100 max-w-3xl mx-auto leading-8">
            Explore our academic programs designed to prepare students with
            strong technical knowledge, analytical thinking, and practical
            skills in modern computing and Data Science.
          </p>
        </div>
      </section>

      {/* About Program */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            B.Tech in Computer Science & Engineering (Data Science)
          </h2>

          <div className="w-28 h-1 bg-blue-700 mx-auto rounded-full mt-4"></div>

          <p className="text-gray-600 mt-8 max-w-5xl mx-auto leading-8 text-lg">
            The Department of Computer Science & Engineering (Data Science)
            offers a four-year undergraduate program that combines core
            computer science concepts with modern data-driven technologies.
            Students gain practical exposure to Artificial Intelligence,
            Machine Learning, Cloud Computing, Big Data Analytics, Software
            Engineering, and Data Visualization through industry-oriented
            learning, projects, internships, and research activities.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-xl border-t-4 border-blue-800 p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-8">
              <GraduationCap className="text-blue-800" size={40} />
            </div>

            <h3 className="text-3xl font-bold text-blue-900 mb-5">
              B.Tech in CSE (Data Science)
            </h3>

            <p className="text-gray-600 leading-8 mb-8">
              A four-year undergraduate program focusing on modern computing,
              intelligent systems, and data-driven technologies.
            </p>

            <ul className="space-y-4">
              {[
                "Python, Java & C++ Programming",
                "Data Structures & Algorithms",
                "Machine Learning",
                "Artificial Intelligence",
                "Database Management Systems",
                "Cloud Computing",
                "Software Engineering",
                "Web Technologies",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-xl border-t-4 border-blue-800 p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-8">
              <FlaskConical className="text-blue-800" size={40} />
            </div>

            <h3 className="text-3xl font-bold text-blue-900 mb-5">
              Research & Higher Studies
            </h3>

            <p className="text-gray-600 leading-8 mb-8">
              Encouraging innovation, research, and advanced learning in
              emerging technologies.
            </p>

            <ul className="space-y-4">
              {[
                "Artificial Intelligence",
                "Deep Learning",
                "Big Data Analytics",
                "Computer Vision",
                "Natural Language Processing",
                "Research Publications",
                "Innovation Projects",
                "Industry Collaboration",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-xl border-t-4 border-blue-800 p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-8">
              <Briefcase className="text-blue-800" size={40} />
            </div>

            <h3 className="text-3xl font-bold text-blue-900 mb-5">
              Internships & Certifications
            </h3>

            <p className="text-gray-600 leading-8 mb-8">
              Industry-focused training programs that prepare students for
              successful professional careers.
            </p>

            <ul className="space-y-4">
              {[
                "Industrial Internship",
                "Live Projects",
                "Python Development",
                "AI & ML Training",
                "Data Analytics",
                "Resume Building",
                "Placement Preparation",
                "Interview Workshops",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-900">
              Why Choose This Program?
            </h2>

            <p className="text-gray-600 mt-4">
              A curriculum designed to prepare future technology leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: <Cpu size={42} />,
                title: "Industry Curriculum",
                text: "Modern syllabus covering AI, Machine Learning, Cloud Computing and Data Science.",
              },
              {
                icon: <Lightbulb size={42} />,
                title: "Hands-on Learning",
                text: "Real-world projects, coding practice, hackathons and laboratory sessions.",
              },
              {
                icon: <Building2 size={42} />,
                title: "Industry Exposure",
                text: "Guest lectures, internships, industrial visits and workshops by experts.",
              },
              {
                icon: <Rocket size={42} />,
                title: "Career Ready",
                text: "Focused placement training with technical and soft-skill development.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition text-center"
              >
                <div className="text-blue-800 flex justify-center mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Career Opportunities */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-900">
            Career Opportunities
          </h2>

          <p className="text-gray-600 mt-4">
            Diverse career paths after completing the program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              icon: <Database size={38} />,
              title: "Data Scientist",
            },
            {
              icon: <BrainCircuit size={38} />,
              title: "Machine Learning Engineer",
            },
            {
              icon: <BarChart3 size={38} />,
              title: "Data Analyst",
            },
            {
              icon: <Cpu size={38} />,
              title: "AI Engineer",
            },
            {
              icon: <Code2 size={38} />,
              title: "Software Developer",
            },
            {
              icon: <Briefcase size={38} />,
              title: "Business Intelligence Analyst",
            },
          ].map((career) => (
            <div
              key={career.title}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:bg-blue-900 hover:text-white transition duration-300"
            >
              <div className="flex justify-center mb-5 text-blue-800 group-hover:text-white">
                {career.icon}
              </div>

              <h3 className="text-xl font-bold">
                {career.title}
              </h3>
            </div>
          ))}

        </div>
      </section>

     
    </>
  );
}