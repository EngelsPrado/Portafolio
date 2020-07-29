import React from "react";

import Particles from "react-particles-js";
import Typed from "react-typed";

const Particle = () => {
  //Activo Typed Js
  const textLines = ["React Developer", "UI/UX DEVELOPER", "FullStack"];

<<<<<<< HEAD
<<<<<<< HEAD
	//Activo Typed Js
	const textLines = [' DESIGNER', 'UI/UX DEVELOPER'];
=======
=======
>>>>>>> 8c7074352dbcb3a0c89f2c81c013894f2b405384
  return (
    <section className="parallax-particles">
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
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
<<<<<<< HEAD
>>>>>>> 2b79d1e2ac0f2d969bbbdc78921917c1af2068d0
=======
>>>>>>> 8c7074352dbcb3a0c89f2c81c013894f2b405384

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
