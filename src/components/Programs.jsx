import { BookOpen } from "lucide-react";

function Programs() {
  return (
    <section id="programs" className="px-10 py-8">

      <div className="flex items-center gap-5 mb-8">

        <div className="w-11 h-11 rounded-lg bg-[#0b3d91] flex items-center justify-center shadow-lg">
          <BookOpen size={22} color="white" />
        </div>

        <h2 className="text-4xl font-bold text-[#0b3d91]">
          Programs Offered
        </h2>

      </div>

      <div className="ml-16">

        <ul className="space-y-4 text-[17px] text-gray-700 leading-8 list-disc">

          <li>
            B.Tech - Computer Science & Engineering (Data Science)
          </li>

          <li>
            Ph.D. - Data Science, Robotics & Artificial Intelligence
          </li>

          <li>
            Internship Certifications
          </li>

        </ul>

      </div>

    </section>
  );
}

export default Programs;