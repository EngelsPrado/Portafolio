import React from "react";

import WrapperBlue from "../Components/WrapperBlue";

//Aos Bblioteca JS
import AOS from "aos";
import "aos/dist/aos.css";

const SobreMi = () => {
  //Inicializo
  AOS.init();

  return (
    <>
      <WrapperBlue titulo="Sobre Mi" />

      <main className="secciones">
        <section className="container sobremi">
          <div className="row align-items-center mb-5" data-aos="fade-up">
            <figure className="col-lg-4 d-none d-lg-block">
              <img
                className="img-fluid"
                src="static/img/sobremi.jpg"
                alt="Mirco Martin Front End"
              />
            </figure>
            <div className="col-12 col-lg-8">
              <p>
                Me llamo Engels Prado Herrera, y me encanta desarrollar webs.
                Desde hace más de 3 años ayudo a negocios y pequeñas empresas a
                captar clientes en internet mediante la creación de una web
                profesional que transmita una imagen corporativa adecuada de su
                empresa y posicione alto en Google. Para ello llevo a cabo la
                creación de páginas web a medida, adaptando al presupuesto tope
                que se me plantee e intentando orientarlas a la consecución de
                beneficios.
              </p>
              <p>
                Fuera del negocio, me gusta realizar diferentes tipos de
                deportes, soy amante del football. Tambien otro hobbie que me
                gusta es andar en bicicleta y jugar al baseball.
              </p>
              <a href="#" className="leer-mas">
                Descargar CV
              </a>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-12 col-md-4 col-lg-3">
              <i className="icon-edit" />
              <h4 className="title-skills">Educacion</h4>
              <p>
                Ingenieria en sistemas de informacion: Universidad Politecnica
                de Nicaragua
              </p>
              <p>Desarrollo Web: Platzi</p>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <i className="icon-laptop" />
              <h4 className="title-skills">Experiencia</h4>
              <p>Sin Riesgos SA: 2019 - 2020</p>
              <p>Hotel Hex: 2018 - 2019</p>
              <p>Freelance: 2017 - Actualidad</p>
            </div>
            <div className="col-12 col-md-4 col-lg-6">
              <i className="icon-diamond" />
              <h4 className="title-skills">Skills</h4>
              <div className="bar">
                <div className="skill">HTML5 / CSS3 / JavaScript</div>
                <div className="bar-outer">
                  <div className="speech-bubble html">Avanzado</div>
                  <div className="bar-inner ht" />
                </div>
              </div>
              <div className="bar">
                <div className="skill">Bootstrap/Sass</div>
                <div className="bar-outer">
                  <div className="speech-bubble js">Avanzado</div>
                  <div className="bar-inner jq" />
                </div>
              </div>
              <div className="bar">
                <div className="skill">React Js</div>
                <div className="bar-outer">
                  <div className="speech-bubble re">Avanzado</div>
                  <div className="bar-inner rs" />
                </div>
              </div>
              <div className="bar">
                <div className="skill">Node/Express</div>
                <div className="bar-outer">
                  <div className="speech-bubble js">Intermedio</div>
                  <div className="bar-inner jq" />
                </div>
              </div>
              <div className="bar">
                <div className="skill">Firebase/SQl/Mongo</div>
                <div className="bar-outer">
                  <div className="speech-bubble js">Avanzado-Intermedio</div>
                  <div className="bar-inner jq" />
                </div>
              </div>
              <div className="bar">
                <div className="skill">Githbu/Git</div>
                <div className="bar-outer">
                  <div className="speech-bubble wp">Avanzado</div>
                  <div className="bar-inner wq" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SobreMi;
