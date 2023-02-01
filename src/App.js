import React from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Players from "./components/Players";

const App = function () {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Players />
      <Footer />
    </React.Fragment>
  );
};

export default App;
