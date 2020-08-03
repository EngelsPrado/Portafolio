import React, { Suspense, lazy } from "react";

import { Router } from "@reach/router";

const SobreMi = lazy(() => import("./Page/SobreMi"));
const Footer = lazy(() => import("./Components/Footer"));
const Contacto = lazy(() => import("./Page/Contacto"));
const Header = lazy(() => import("./Components/Header"));
const Servicios = lazy(() => import("./Page/Servicios"));
const Portafolio = lazy(() => import("./Page/Portafolio"));
const Index = lazy(() => import("./Page/Index"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Router>
          <Index path="/" />
          <Contacto path="/contacto" />
          <SobreMi path="/sobremi" />
          <Servicios path="/servicios" />
          <Portafolio path="/portafolio" />
        </Router>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
