import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Section1 from "./components/Section1/Section1";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonial/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Experience />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
