import React from "react";

import Footer from "./Components/Footer";
import Contacto from "./Page/Contacto";
import SobreMi from "./Page/SobreMi";
import Header from "./Components/Header";
import Servicios from "./Page/Servicios";
import Portafolio from "./Page/Portafolio";
import Particles from "react-particles-js";
function App() {
  return (
    <>
      <Header />
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5,
              },
            },
          },
        }}
        style={{
          width: "100%",
          backgroundImage: `url(/static/img/parallax.jpg)`,
        }}
      />
      <SobreMi></SobreMi>
      <Servicios></Servicios>
      <Portafolio />
      <Contacto></Contacto>
      <Footer />
    </>
  );
}

export default App;
