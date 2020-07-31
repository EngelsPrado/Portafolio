import React, { Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Elegirme() {
  AOS.init();
  return (
    <div>
      <Fragment>
        <div className="wrapper-red ">
          <section className="container elegirme">
            <div className="row align-items-center" data-aos="fade-up">
              <div className="col-12">
                <h3 className="titulos-index">Por que Elegirme?</h3>
              </div>
              <div className="col-12 col-lg-6 order-1 order-lg-0 ">
                <div className="row align-items-center elegirme-info">
                  <figure className="col-auto info-icono">
                    <i className="icon-code"></i>
                  </figure>
                  <article className="col-9 info-body">
                    <h4 className="titulos-h4">Codigo Limpio</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis, expedita sed reprehenderit delectus ex officia quos
                      praesentium eos odio molestiae.
                    </p>
                  </article>
                  <figure className="col-auto info-icono">
                    <i className="icon-share"></i>
                  </figure>
                  <article className="col-9 info-body">
                    <h4 className="titulos-h4">Branding</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis, expedita sed reprehenderit delectus ex officia quos
                      praesentium eos odio molestiae.
                    </p>
                  </article>
                  <figure className="col-auto info-icono">
                    <i className="icon-smile"></i>
                  </figure>
                  <article className="col-9 info-body">
                    <h4 className="titulos-h4">Soporte Ilimitado</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis, expedita sed reprehenderit delectus ex officia quos
                      praesentium eos odio molestiae.
                    </p>
                  </article>
                </div>
              </div>
              <figure className="col-12 col-lg-6 order-0 order-lg-1 elegirme-img">
                <img
                  loading="lazy"
                  className="img-fluid"
                  src="static/img/elegirme.jpg"
                  alt="Mirco Martin Front-End Developer"
                />
              </figure>
            </div>
          </section>
        </div>

        <section className="parallax-trabajemos-juntos">
          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-12">
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
