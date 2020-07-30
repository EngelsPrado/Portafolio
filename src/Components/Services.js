import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Services() {
  AOS.init();
  return (
    <div>
      <div class="wrapper-red">
        <div class="container">
          <section class="row servicios-index" data-aos="fade-up">
            <div class="col-12">
              <h3 class="titulos-index">Servicios</h3>
            </div>
            <article class="col-12 col-lg-4 servicio-individual">
              <i class="icon-laptop"></i>
              <h4 class="titulos-h4">Web Developer</h4>
              <p class="parrafo">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium consequatur, vel nesciunt pariatur itaque at! Dolores
                vero, similique harum blanditiis veniam dolore cumque adipisci
                voluptate iure totam asperiores, officiis aspernatur!
              </p>
            </article>
            <article class="col-12 col-lg-4 servicio-individual">
              <i class="icon-mobile"></i>
              <h4 class="titulos-h4">Responsive Design</h4>
              <p class="parrafo">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium consequatur, vel nesciunt pariatur itaque at! Dolores
                vero, similique harum blanditiis veniam dolore cumque adipisci
                voluptate iure totam asperiores, officiis aspernatur!
              </p>
            </article>
            <article class="ol-12 col-lg-4 servicio-individual">
              <i class="icon-picture"></i>
              <h4 class="titulos-h4">Diseño Grafico</h4>
              <p class="parrafo">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium consequatur, vel nesciunt pariatur itaque at! Dolores
                vero, similique harum blanditiis veniam dolore cumque adipisci
                voluptate iure totam asperiores, officiis aspernatur!
              </p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
