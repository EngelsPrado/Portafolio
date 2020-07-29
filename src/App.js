import React from "react";

import Footer from "./Components/Footer";
import Contacto from "./Page/Contacto";
import SobreMi from "./Page/SobreMi";
import Header from "./Components/Header";
import Servicios from "./Page/Servicios";
import Portafolio from "./Page/Portafolio";
import Index from "./Page/Index";

function App() {
  return (
    <>
      <Header />
      <Index></Index>

      <SobreMi></SobreMi>
      <Servicios></Servicios>
      <Portafolio />
      <Contacto></Contacto>

      <Footer />
    </>
  );
}

export default App;
