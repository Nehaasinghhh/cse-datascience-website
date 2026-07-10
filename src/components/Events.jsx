import {
  Calendar,
  Presentation,
  Trophy,
  Building2,
} from "lucide-react";

import poster from "../assets/images/poster.jpg";
import lecture from "../assets/images/Guest_lecture.jpg";
import quiz from "../assets/images/quiz_comp.jpg";
import tour from "../assets/images/industrial_visit.jpeg";

function Events() {
  const events = [
    {
      image: poster,
      icon: <Presentation size={24} />,
      title: "Poster Presentation",
      text: `Intelligent Data Systems

Coordinator:
Prof. Sankar Mondal
Prof. Rajyashree Chandra`,
    },

    {
      image: lecture,
      icon: <Calendar size={24} />,
      title: "Guest Lecture",
      text: `Smartness That Really Matters:
Reaching New Levels of Customer Delight
for Sustainable Supply Chain Management.

Speaker:
Dr. Vipul Jain`,
    },

    {
      image: quiz,
      icon: <Trophy size={24} />,
      title: "Quiz Competition",
      text: `QuizzVerse:
Inter-Departmental Quiz Competition

Coordinator:
Prof. Sudipta Dey
Prof. Moumita Chakraborty`,
    },

    {
      image: tour,
      icon: <Building2 size={24} />,
      title: "Industrial Tour",
      text: `Industrial Visit

Softech ERP Solutions Pvt. Ltd

Coordinator:
Prof. Sankar Mondal
Prof. Sudipta Dey`,
    },
  ];

  return (
    <section
      id="events"
      className="bg-gradient-to-br from-blue-50 to-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center gap-5 mb-12">

          <div className="w-12 h-12 rounded-lg bg-[#0b3d91] flex items-center justify-center shadow-lg">
            <Calendar size={24} color="white" />
          </div>

          <h2 className="text-4xl font-bold text-[#0b3d91]">
            Events
          </h2>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {events.map((event, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="h-52 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <div className="mb-4 flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-[#0b3d91]">
                    {event.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#0b3d91]">
                    {event.title}
                  </h3>

                </div>

                <p className="whitespace-pre-line text-[15px] leading-7 text-gray-700">
                  {event.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Events;