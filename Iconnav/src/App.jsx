import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
