import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Services() {
  AOS.init();
  return (
    <div>
      <div className="wrapper-red">
        <div className="container">
          <section className="row servicios-index" data-aos="fade-up">
            <div className="col-12">
              <h3 className="titulos-index">Servicios</h3>
            </div>
            <article className="col-12 col-lg-4 servicio-individual">
              <i className="icon-laptop"></i>
              <h4 className="titulos-h4">Web Developer</h4>
              <p className="parrafo">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium consequatur, vel nesciunt pariatur itaque at! Dolores
                vero, similique harum blanditiis veniam dolore cumque adipisci
                voluptate iure totam asperiores, officiis aspernatur!
              </p>
            </article>
            <article className="col-12 col-lg-4 servicio-individual">
              <i className="icon-mobile"></i>
              <h4 className="titulos-h4">Responsive Design</h4>
              <p className="parrafo">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium consequatur, vel nesciunt pariatur itaque at! Dolores
                vero, similique harum blanditiis veniam dolore cumque adipisci
                voluptate iure totam asperiores, officiis aspernatur!
              </p>
            </article>
            <article className="ol-12 col-lg-4 servicio-individual">
              <i className="icon-picture"></i>
              <h4 className="titulos-h4">Diseño Grafico</h4>
              <p className="parrafo">
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
