import React from "react";

import Particles from "react-particles-js";
import Typed from "react-typed";

const Particle = () => {
  //Activo Typed Js
  const textLines = [" DESIGNER", "UI/UX DEVELOPER"];

  return (
    <section className="parallax-particles">
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
      <div className="info">
        <div className="wrapper-saludo">
          <h3 className="saludo">Hola</h3>
        </div>
        <div className="detalleNombre">
          <p>Soy</p>
          <h1>Mirco Martin</h1>

          <span id="element" className="element">
            <Typed
              strings={textLines}
              typeSpeed={200}
              loop={true}
              backDelay={600}
              showCursor={true}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Particle;
