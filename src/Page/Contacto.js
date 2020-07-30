import React from "react";

import WrapperBlue from "../Components/WrapperBlue";

//Aos Bblioteca JS
import AOS from "aos";
import "aos/dist/aos.css";

const Contacto = () => {
  //Inicializo
  AOS.init();

  return (
    <>
      <WrapperBlue titulo="Contacto" />

      <main className="secciones">
        <section className="container contacto">
          <div
            className="row align-items-center justify-content-between"
            data-aos="fade-up"
          >
            <div className="col-12 col-md-6 order-1 order-md-0">
              <form>
                <div className="form-group d-flex justify-content-between">
                  <input
                    className="nombre-email"
                    type="text"
                    placeholder="Nombre"
                  />
                  <input
                    className="nombre-email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input className="asunto" type="text" placeholder="Asunto" />
                </div>
                <div className="form-group">
                  <textarea type="text" placeholder="Mensaje..." />
                </div>
                <div className="form-group">
                  <button type="submit" className="leer-mas">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-5 mb-4 mb-md-0 order-0 order-lg-1 body-contacto">
              <h4 className="titulos-index">
                No dudes en enviarme tu consulta!
              </h4>
              <p>
                Envíame tus requisitos para un sitio web, investigaremos sus
                especificaciones y competidores, crearemos un prototipo del
                sitio web de forma gratuita y le enviaremos un resultado.
              </p>
              <section className="redes-general d-flex justify-content-center justify-content-md-start">
                <a
                  className="instagram"
                  href="https://www.instagram.com/engels_prado/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-instagram" />
                </a>
                <a
                  className="facebook"
                  href="https://www.facebook.com/EngelsLoveEngels/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-facebook" />
                </a>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/engels-prado-397096168/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin-squared" />
                </a>
              </section>
            </div>
          </div>
          <div className="row mt-5" data-aos="fade-up">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15602.299071481382!2d-86.20143468092044!3d12.1412207032506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc08b332971870e2!2sMATEPSA!5e0!3m2!1ses-419!2sni!4v1596079051546!5m2!1ses-419!2sni"
                style={{ width: "600px", height: "450", border: "0" }}
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contacto;
