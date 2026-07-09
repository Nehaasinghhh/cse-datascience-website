import Navbar from "../components/Navbar";
import About from "../components/About";
import Events from "../components/Events";
import Programs from "../components/Programs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f5f7fb] py-10">

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">

          <About />

          <Events />

          <Programs />

          <Contact />

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Home;