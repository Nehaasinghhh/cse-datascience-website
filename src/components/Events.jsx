import {
  Calendar,
  Presentation,
  Trophy,
  Building2,
} from "lucide-react";

function Events() {
  const events = [
    {
      icon: <Presentation size={28} />,
      title: "Poster Presentation",
      text: `Intelligent Data Systems Coordinator Prof. Sankar Mondaland Prof. Rajyashree Chandra`,
    },

    {
      icon: <Calendar size={28} />,
      title: "Guest Lecture",
      text: `Smartness That Really Matters:
Reaching New Levels of Customer Delight
for Sustainable Supply Chain Management.
Dr. Vipul Jain`,
    },

    {
      icon: <Trophy size={28} />,
      title: "Quizz Competition",
      text: `QuizzVerse:
Inter-Departmental Quiz Competition
Coordinator Prof. Sudipta Dey and Prof. Moumita Chakraborty`,
    },

    {
      icon: <Building2 size={28} />,
      title: "Industrial Tour",
      text: `Softech ERP Solutions Pvt. Ltd Coordinator Prof. Sankar Mondal and Prof. Sudipta Dey`,
    },
  ];

  return (
    <section id="events" className="px-10 py-8">


      <div className="flex items-center gap-5 mb-8">

        <div className="w-11 h-11 rounded-lg bg-[#0b3d91] flex justify-center items-center shadow-lg">

          <Calendar size={22} color="white" />

        </div>

        <h2 className="text-4xl font-bold text-[#0b3d91]">
          Events
        </h2>

      </div>

      {/* Cards */}

      <div className="grid lg:grid-cols-4 gap-5">

        {events.map((event, index) => (

          <div
            key={index}
            className="bg-[#f7fbff] border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
          >

            <div className="flex items-center gap-3 mb-5">

              <div className="w-14 h-14 rounded-xl bg-white shadow flex justify-center items-center text-[#0b3d91]">

                {event.icon}

              </div>

              <h3 className="font-bold text-[#0b3d91] text-lg leading-6">

                {event.title}

              </h3>

            </div>

            <p className="text-[15px] leading-7 whitespace-pre-line text-gray-700">

              {event.text}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Events;