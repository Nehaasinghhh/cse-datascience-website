import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Building2 } from "lucide-react";

import poster from "../assets/images/poster.jpg";
import lecture from "../assets/images/Guest_lecture.jpg";
import quiz from "../assets/images/quiz_comp.jpg";
import tour from "../assets/images/industrial_visit.jpeg";

function Events() {
  const events = [
    {
      image: poster,
      icon: <Calendar size={18} />,
      title: "Poster Presentation",
      date: "Academic Activity",
      description:
        "Students presented innovative ideas on Intelligent Data Systems under the guidance of department faculty, encouraging creativity, research and technical presentation skills.",
    },
    {
      image: lecture,
      icon: <Calendar size={18} />,
      title: "Guest Lecture",
      date: "Expert Talk",
      description:
        "An interactive session by Dr. Vipul Jain on sustainable supply chain management, emerging technologies and industrial applications of Data Science.",
    },
    {
      image: quiz,
      icon: <Calendar size={18} />,
      title: "Quiz Competition",
      date: "Technical Event",
      description:
        "Inter-departmental technical quiz encouraging logical thinking, teamwork, competitive spirit and technical knowledge among students.",
    },
    {
      image: tour,
      icon: <Building2 size={18} />,
      title: "Industrial Tour",
      date: "Industrial Visit",
      description:
        "Students visited Softech ERP Solutions Pvt. Ltd. to understand real-world software development, project management, ERP solutions and industry best practices.",
    },
  ];

  return (
    <>
      {/* Banner */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Department Events
          </h1>

          <p className="mt-5 text-lg text-blue-100 max-w-3xl mx-auto leading-8">
            The Department of Computer Science & Engineering (Data Science)
            regularly organizes technical events, guest lectures, workshops,
            industrial visits and competitions to enhance students'
            technical expertise, innovation, leadership and practical
            industry exposure.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Featured Events
            </h2>

            <div className="w-24 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>

            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              Students actively participate in technical activities,
              competitions, expert lectures and industrial visits that
              bridge the gap between classroom learning and real-world
              applications.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white border border-blue-100 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-blue-700 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  <div className="flex items-center gap-2 text-blue-700 mb-3">
                    {event.icon}
                    <span className="text-sm font-semibold">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mb-6">
                    {event.description}
                  </p>

                  <Link
                    to="/events"
                    className="inline-flex items-center gap-2 font-semibold text-blue-800 transition hover:text-blue-600"
                  >
                    Read More

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Events;