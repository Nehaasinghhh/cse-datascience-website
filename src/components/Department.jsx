function Department() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Department Overview
          </h2>

          <div className="w-24 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-blue-50 rounded-3xl p-10 shadow-lg border border-blue-100 hover:border-blue-700 hover:shadow-2xl transition-all duration-300">

          <p className="text-gray-700 text-lg leading-8 text-justify">
            The Department of Computer Science & Engineering (Data Science)
            at the University of Engineering and Management, Kolkata,
            is committed to producing skilled professionals in the field
            of Artificial Intelligence, Machine Learning, Big Data Analytics,
            Cloud Computing and modern software technologies.
          </p>

          <p className="mt-6 text-gray-700 text-lg leading-8 text-justify">
            The department provides an excellent academic environment with
            experienced faculty members, modern laboratories, research
            opportunities, industrial collaborations and technical events
            that help students develop practical knowledge along with strong
            theoretical foundations.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Department;