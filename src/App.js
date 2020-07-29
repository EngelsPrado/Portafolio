import React from "react";

import Footer from "./Components/Footer";
import Contacto from "./Page/Contacto";
import SobreMi from "./Page/SobreMi";
import Header from "./Components/Header";
import Servicios from "./Page/Servicios";

function App() {
  return (
    <>
      <Header></Header>
      <Servicios />
      <SobreMi />
      <Contacto></Contacto>
      <Footer />
    </>
  );
}

export default App;
