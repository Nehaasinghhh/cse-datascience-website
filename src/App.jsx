import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ScrollTop from "./components/ScrollTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ScrollTop />


     <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <ScrollToTopButton />
    </>
  );
}

export default App; 