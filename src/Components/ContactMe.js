import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import "firebase/firestore";
export default function ContactMe() {
  const firebaseApp = useFirebaseApp(); //Sólo funciona en componentes dentro de FirebaseAppProvider

  const messages = firebaseApp.firestore().collection("Messages");

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [alert, setAlert] = useState(false);
  const sendMessage = (e) => {
    e.preventDefault();

    messages.add({ nombre, email, asunto, mensaje });
    setNombre("");
    setEmail("");
    setAsunto("");
    setMensaje("");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  return (
    <div>
      <section className="container contacto-index" id="contacto">
        <div className="row">
          <div className="col-12 wrapper-titulo">
            <h3 className="titulos-index">Estemos en contacto</h3>
          </div>
          <div className="col-12 col-lg-6 contacto-info">
            <p>
              <i className="icon-location"></i>Managua,Nicaragua
            </p>
            <p>
              <i className="icon-mail"></i> engelsprado7@gmail.com
            </p>
            <p>
              <i className="icon-whatsapp"></i> +50575549314
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15602.299071481382!2d-86.20143468092044!3d12.1412207032506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc08b332971870e2!2sMATEPSA!5e0!3m2!1ses-419!2sni!4v1596079051546!5m2!1ses-419!2sni"
              style={{ width: "100%", height: "450", border: "0" }}
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="col-12 col-lg-6 formulario">
            <form action="">
              <div className="form-group row">
                <div className="col-12 col-lg-6 form-nombre-email">
                  <label htmlFor="nombre">
                    <i className="icon-user"></i>
                  </label>
                  <input
                    name="nombre"
                    placeholder="Nombre"
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="col-12 col-lg-6 form-nombre-email">
                  <label htmlFor="email">
                    <i className="icon-mail"></i>
                  </label>
                  <input
                    name="email"
                    placeholder="Email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12 form-asunto">
                  <label htmlFor="asunto">
                    <i className="icon-pencil"></i>
                  </label>
                  <input
                    placeholder="Asunto"
                    id="asunto"
                    type="text"
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12">
                  <textarea
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Dejame tu mensaje..."
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="boton-enviar"
                    onClick={sendMessage}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
          {alert && (
            <div data-aos="fade-up" class="alert alert-primary" role="alert">
              <p>Pronto me pondre en contacto contigo!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
