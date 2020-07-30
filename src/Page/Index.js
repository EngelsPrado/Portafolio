import React from "react";
import Particle from "./Index/Particles";
import About from "../Components/About";
import Services from "../Components/Services";
import PortafolioSection from "../Components/PortafolioSection";
import Elegirme from "../Components/Elegirme";
import ContactMe from "../Components/ContactMe";

const Index = () => {
  return (
    <>
      <Particle />
      <main>
        <About />
        <Services />
        <PortafolioSection />
        <Elegirme />
        <ContactMe />
      </main>
    </>
  );
};

export default Index;
