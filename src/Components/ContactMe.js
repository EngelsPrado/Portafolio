import React from "react";

export default function ContactMe() {
  return (
    <div>
      <section class="container contacto-index" id="contacto">
        <div class="row">
          <div class="col-12 wrapper-titulo">
            <h3 class="titulos-index">Estemos en contacto</h3>
          </div>
          <div class="col-12 col-lg-6 contacto-info">
            <p>
              <i class="icon-location"></i> Rosario, Santa Fe
            </p>
            <p>
              <i class="icon-mail"></i> consultas@mmdiseños.com.ar
            </p>
            <p>
              <i class="icon-whatsapp"></i> 3415 486863
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15602.299071481382!2d-86.20143468092044!3d12.1412207032506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc08b332971870e2!2sMATEPSA!5e0!3m2!1ses-419!2sni!4v1596079051546!5m2!1ses-419!2sni"
              style={{ width: "600px", height: "450", border: "0" }}
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="col-12 col-lg-6 formulario">
            <form action="">
              <div class="form-group row">
                <div class="col-12 col-lg-6 form-nombre-email">
                  <label for="nombre">
                    <i class="icon-user"></i>
                  </label>
                  <input
                    name="nombre"
                    placeholder="Nombre"
                    id="nombre"
                    type="text"
                  />
                </div>
                <div class="col-12 col-lg-6 form-nombre-email">
                  <label for="email">
                    <i class="icon-mail"></i>
                  </label>
                  <input
                    name="email"
                    placeholder="Email"
                    id="email"
                    type="email"
                  />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-12 form-asunto">
                  <label for="asunto">
                    <i class="icon-pencil"></i>
                  </label>
                  <input placeholder="Asunto" id="asunto" type="text" />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-12">
                  <textarea placeholder="Dejame tu mensaje..."></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="boton-enviar">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
