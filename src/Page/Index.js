import React, { lazy, Suspense } from "react";

const Particle = lazy(() => import("./Index/Particles"));
const About = lazy(() => import("../Components/About"));
const Services = lazy(() => import("../Components/Services"));
const PortafolioSection = lazy(() => import("../Components/PortafolioSection"));
const Elegirme = lazy(() => import("../Components/Elegirme"));
const ContactMe = lazy(() => import("../Components/ContactMe"));
const Index = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Particle />
        <main>
          <About />
          <Services />
          <PortafolioSection />
          <Elegirme />
          <ContactMe />
        </main>
      </Suspense>
    </>
  );
};

export default Index;
