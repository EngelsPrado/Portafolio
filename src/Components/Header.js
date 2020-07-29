import React from "react";

export default function Header() {
  return (
    <div>
      <header class="nav-hide" id="header">
        <nav class="container">
          <div class="row mm-wrapper justify-content-between align-items-center">
            <figure class="contenedor-logo col-auto">
              <a class="brand-menu" href="#">
                <img src="/static/img/logo.png" alt="Logo Mirco Martin" />
              </a>
              <a class="btn-menu" id="btn-menu">
                <i class="icono icon-menu" aria-hidden="true"></i>
              </a>
            </figure>
            <ul class="menu col-12 col-md-9" id="enlaces">
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>
                <a href="sobremi.html">Sobre Mi</a>
              </li>
              <li>
                <a href="servicios.html">Servicios</a>
              </li>
              <li>
                <a href="portafolio.html">Portfolio</a>
              </li>
              <li>
                <a href="contacto.html">Contacto</a>
              </li>
            </ul>
            <section class="col-auto redes-sociales d-none d-lg-block">
              <a
                class="instagram"
                href="https://www.instagram.com/layback.ar"
                target="_blank"
              >
                <i class="icon-instagram"></i>
              </a>
              <a
                class="facebook"
                href="https://www.facebook.com/mircocmartin"
                target="_blank"
              >
                <i class="icon-facebook"></i>
              </a>
              <a
                class="linkedin"
                href="https://www.linkedin.com/in/mirco-martin-a3b70670"
                target="_blank"
              >
                <i class="icon-linkedin-squared"></i>
              </a>
            </section>
          </div>
        </nav>
      </header>
    </div>
  );
}
