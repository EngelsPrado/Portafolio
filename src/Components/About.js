import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  //Inicializo
  AOS.init();
  return (
    <section class="container sobre-mi-index">
      <div class="row wrapper-sobreMi" data-aos="fade-up">
        <div class="col-12 order-1 order-lg-0 col-lg-6 info-sobreMi">
          <h3 class="titulos-index">Conoceme...</h3>
          <p class="parrafo">
            Me llamo Mirco Martin y me encanta desarrollar webs. Desde hace más
            de 2 años ayudo a negocios y pequeñas empresas a captar clientes en
            internet mediante la creación de una web profesional que transmita
            una imagen corporativa adecuada de su empresa y posicione alto en
            Google. Para ello llevo a cabo la creación de páginas web a medida,
            adaptando al presupuesto tope que se me plantee e intentando
            orientarlas a la consecución de beneficios.
          </p>
          <a href="#" class="leer-mas">
            Leer mas...
          </a>
        </div>
        <figure class="col-12 order-0 order-lg-1 col-lg-6 img-sobreMi">
          <img
            class="img-fluid"
            src="img/index-sobremi.jpg"
            alt="Mirco Martin Desarrollador Web"
          />
        </figure>
      </div>
    </section>
  );
}
