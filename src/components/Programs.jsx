import {
  GraduationCap,
  FlaskConical,
  Briefcase,
  CheckCircle,
} from "lucide-react";

function Programs() {
  const programs = [
    {
      icon: <GraduationCap size={40} />,
      title: "B.Tech in CSE (Data Science)",
      description:
        "A 4-year undergraduate program focusing on modern computing technologies and data-driven solutions.",
      points: [
        "Python, Java & C++ Programming",
        "Data Structures & Algorithms",
        "Machine Learning",
        "Artificial Intelligence",
        "Database Management Systems",
        "Cloud Computing",
      ],
    },
    {
      icon: <FlaskConical size={40} />,
      title: "Ph.D. in Data Science",
      description:
        "Research-oriented program for scholars interested in advanced computing and intelligent systems.",
      points: [
        "Artificial Intelligence Research",
        "Deep Learning",
        "Big Data Analytics",
        "Computer Vision",
        "Research Publications",
        "Industry Collaboration",
      ],
    },
    {
      icon: <Briefcase size={40} />,
      title: "Internships & Certifications",
      description:
        "Industry-focused training programs that prepare students for professional careers.",
      points: [
        "Industrial Internship",
        "Live Projects",
        "Python Development",
        "AI & ML Training",
        "Resume Building",
        "Placement Preparation",
      ],
    },
  ];

  return (
    <section
      id="programs"
      className="bg-gradient-to-br from-blue-50 to-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

    
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-[#0b3d91]">
            Programs Offered
          </h2>

          <p className="mt-3 text-gray-600 text-lg">
            Explore our academic programs designed for future technology leaders.
          </p>

        </div>

   
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((program, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#0b3d91] hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

        
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-[#0b3d91] mb-5">

                {program.icon}

              </div>

              <h3 className="text-2xl font-bold text-[#0b3d91] mb-3">

                {program.title}

              </h3>

         
              <p className="text-gray-600 mb-6 leading-7">

                {program.description}

              </p>

              <ul className="space-y-3">

                {program.points.map((point, i) => (

                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700"
                  >

                    <CheckCircle
                      size={18}
                      className="text-green-600 mt-1 flex-shrink-0"
                    />

                    <span>{point}</span>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Programs;