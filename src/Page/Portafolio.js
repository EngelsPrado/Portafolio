import React from "react";
import GliderComponent from "react-glider-carousel";
import WrapperBlue from "../Components/WrapperBlue";

//Aos Bblioteca JS
import AOS from "aos";
import "aos/dist/aos.css";

const Portafolio = () => {
  //Inicializo
  AOS.init();

  return (
    <>
      <WrapperBlue titulo="Ultimo Proyecto" />

      <main className="secciones">
        <section className="container portafolio" data-aos="fade-up">
          <div className="row">
            <div className="carousel col-12 mb-5">
              <div className="carousel__contenedor">
                <GliderComponent hasArrows={true} hasDots={true}>
                  <div className="carousel__elemento">
                    <img src="static/img/chat1.webp" alt="SR" />
                  </div>
                  <div className="carousel__elemento">
                    <img
                      src="static/img/chat2.png"
                      alt="Licenciada Mariel Leone"
                    />
                  </div>
                </GliderComponent>
              </div>
              <div role="tablist" className="carousel__indicadores" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12 order-1 col-md-4 order-md-0 mb-5 mb-md-0">
              <p>
                <strong>Cliente: </strong>Sin Riesgos SA
              </p>
              <p>
                <strong>Año: </strong>2020
              </p>
              <p>
                <strong>Social Media: </strong>
                <a
                  className="instagram"
                  href="https://www.instagram.com/lic.marielleone/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-instagram" />
                </a>
                <a
                  className="facebook"
                  href="https://www.facebook.com/mariel.leone.7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-facebook" />
                </a>
              </p>
            </div>
            <div className="col-12 order-1 col-md-8 order-md-1 detalles-proyecto">
              <h4 className="titulos-index">Chat por grupo y privado</h4>
              <p>
                Esta aplicacion web fue creada con NodeJs,Sockets y
                Bootstrap.Deploy de la aplicacion usando Heroku
              </p>
              <strong>Preview </strong>
              <a href="https://mysendapp.herokuapp.com/">Aqui</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portafolio;
