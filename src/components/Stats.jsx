import {
  Users,
  GraduationCap,
  BookOpen,
  Briefcase,
  Trophy,
  Building2,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Users size={40} />,
      number: "500+",
      title: "Students",
      desc: "Bright and talented students pursuing CSE (Data Science).",
    },
    {
      icon: <GraduationCap size={40} />,
      number: "20+",
      title: "Faculty Members",
      desc: "Highly qualified faculty with strong academic and research backgrounds.",
    },
    {
      icon: <BookOpen size={40} />,
      number: "50+",
      title: "Technical Events",
      desc: "Workshops, seminars, hackathons and guest lectures every year.",
    },
    {
      icon: <Briefcase size={40} />,
      number: "95%",
      title: "Placement Support",
      desc: "Excellent career guidance and industry-oriented training.",
    },
  ];

  const highlights = [
    {
      icon: <Building2 size={32} />,
      title: "Modern Laboratories",
      text: "Advanced computing labs equipped with the latest software and hardware technologies.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Research & Innovation",
      text: "Students are encouraged to participate in research projects, publications and innovation.",
    },
    {
      icon: <Trophy size={32} />,
      title: "Industry Exposure",
      text: "Industrial visits, internships, guest lectures and collaborative projects with industry.",
    },
  ];

  return (
    <>
      {/* Department Highlights */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b3d91]">
              Department Highlights
            </h2>

            <div className="w-24 h-1 bg-[#0b3d91] mx-auto mt-4 rounded-full"></div>

            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
              The Department of Computer Science & Engineering (Data Science)
              strives to provide quality education, research opportunities and
              industry exposure for building successful professionals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white border border-blue-100 p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-700 hover:shadow-2xl"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0b3d91] text-white transition group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-4xl font-bold text-[#0b3d91]">
                  {item.number}
                </h3>

                <h4 className="mt-3 text-xl font-semibold text-gray-800">
                  {item.title}
                </h4>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Full Width Why Choose Us */}
      <section className= "bg-gradient-to-br from-blue-50 to-white py-20">


        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl  md:text-5xl font-bold text-[#0b3d91]">
              Why Choose Our Department?
            </h2>

            <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full"></div>

            <p className="mt-6 text-black text-lg max-w-3xl mx-auto">
              Preparing students for successful careers through academic
              excellence, innovation and practical learning.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {highlights.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0b3d91] text-white transition group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mb-4 text-2xl font-bold text-[#0b3d91]">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}