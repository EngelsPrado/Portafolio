import React from "react";

export default function PortafolioSection() {
  return (
    <div>
      <section className="portfolio-index container">
        <div className="row">
          <div className="col-12 wrapper-titulo">
            <h3 className="titulos-index">Portfolio</h3>
          </div>
          <article className="col-12 col-md-4 wrapper-option">
            <figure className="option">
              <img
                loading="lazy"
                className="img-fluid"
                src="static/img/surf.jpg"
                alt="Surf-Blog"
              />
              <figcaption className="overlay">
                <p className="overlay-texto">
                  <a href="https://layback.com.ar/" target="_blank">
                    Surf-Blog
                  </a>
                </p>
              </figcaption>
            </figure>
          </article>
          <article className="col-12 col-md-4 wrapper-option">
            <figure className="option">
              <img
                loading="lazy"
                className="img-fluid"
                src="static/img/nutricion.jpg"
                alt="Licenciada en Nutricion"
              />
              <figcaption className="overlay">
                <p className="overlay-texto">
                  <a href="https://licmarielleone.com.ar/" target="_blank">
                    Nutricion
                  </a>
                </p>
              </figcaption>
            </figure>
          </article>
          <article className="col-12 col-md-4 wrapper-option">
            <figure className="option">
              <img
                loading="lazy"
                className="img-fluid"
                src="static/img/pasteleria.jpg"
                alt="Pasteleria Artesanal"
              />
              <figcaption className="overlay">
                <p className="overlay-texto">
                  <a href="https://licmarielleone.com.ar/" target="_blank">
                    Pasteleria
                  </a>
                </p>
              </figcaption>
            </figure>
          </article>
          <article className="col-12 col-md-4 wrapper-option">
            <figure className="option">
              <img
                loading="lazy"
                className="img-fluid"
                src="static/img/pasteleria.jpg"
                alt="Pasteleria Artesanal"
              />
              <figcaption className="overlay">
                <p className="overlay-texto">
                  <a href="https://licmarielleone.com.ar/" target="_blank">
                    Pasteleria
                  </a>
                </p>
              </figcaption>
            </figure>
          </article>
          <article className="col-12 col-md-4 wrapper-option">
            <figure className="option">
              <img
                loading="lazy"
                className="img-fluid"
                src="static/img/pasteleria.jpg"
                alt="Pasteleria Artesanal"
              />
              <figcaption className="overlay">
                <p className="overlay-texto">
                  <a href="https://licmarielleone.com.ar/" target="_blank">
                    Pasteleria
                  </a>
                </p>
              </figcaption>
            </figure>
          </article>
          <article className="col-12 col-md-4 wrapper-option">
            <figure className="option">
              <img
                loading="lazy"
                className="img-fluid"
                src="static/img/pasteleria.jpg"
                alt="Pasteleria Artesanal"
              />
              <figcaption className="overlay">
                <p className="overlay-texto">
                  <a href="https://licmarielleone.com.ar/" target="_blank">
                    Pasteleria
                  </a>
                </p>
              </figcaption>
            </figure>
          </article>
        </div>
      </section>
    </div>
  );
}
