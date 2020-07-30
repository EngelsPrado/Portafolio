import React, { Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Elegirme() {
  AOS.init();
  return (
    <div>
      <Fragment>
        <div class="wrapper-red ">
          <section class="container elegirme">
            <div class="row align-items-center" data-aos="fade-up">
              <div class="col-12">
                <h3 class="titulos-index">Por que Elegirme?</h3>
              </div>
              <div class="col-12 col-lg-6 order-1 order-lg-0 ">
                <div class="row align-items-center elegirme-info">
                  <figure class="col-auto info-icono">
                    <i class="icon-code"></i>
                  </figure>
                  <article class="col-9 info-body">
                    <h4 class="titulos-h4">Codigo Limpio</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis, expedita sed reprehenderit delectus ex officia quos
                      praesentium eos odio molestiae.
                    </p>
                  </article>
                  <figure class="col-auto info-icono">
                    <i class="icon-share"></i>
                  </figure>
                  <article class="col-9 info-body">
                    <h4 class="titulos-h4">Branding</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis, expedita sed reprehenderit delectus ex officia quos
                      praesentium eos odio molestiae.
                    </p>
                  </article>
                  <figure class="col-auto info-icono">
                    <i class="icon-smile"></i>
                  </figure>
                  <article class="col-9 info-body">
                    <h4 class="titulos-h4">Soporte Ilimitado</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis, expedita sed reprehenderit delectus ex officia quos
                      praesentium eos odio molestiae.
                    </p>
                  </article>
                </div>
              </div>
              <figure class="col-12 col-lg-6 order-0 order-lg-1 elegirme-img">
                <img
                  loading="lazy"
                  class="img-fluid"
                  src="static/img/elegirme.jpg"
                  alt="Mirco Martin Front-End Developer"
                />
              </figure>
            </div>
          </section>
        </div>

        <section class="parallax-trabajemos-juntos">
          <div class="container">
            <div class="row" data-aos="fade-up">
              <div class="col-12">
                <h3>Trabajemos Juntos!</h3>
                <p>Estoy disponible para proyectos freelance.</p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </div>
  );
}
