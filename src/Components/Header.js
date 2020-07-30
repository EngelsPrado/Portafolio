import React from "react";
import { Link } from "@reach/router";
const Header = () => {
  return (
    <header className="nav-hide" id="header">
      <nav className="container">
        <div className="row mm-wrapper justify-content-between align-items-center">
          <figure className="contenedor-logo col-auto">
            <a className="brand-menu" to="/">
              <img
                src="/static/img/logo_size_invert.jpg"
                width="86px"
                alt="Logo Engels Prado"
              />
            </a>
            <a className="btn-menu" id="btn-menu">
              <i className="icono icon-menu" aria-hidden="true" />
            </a>
          </figure>
          <ul className="menu col-12 col-md-9" id="enlaces">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/sobremi">Sobre mi</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/portafolio">Portafolio</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
          <section className="col-auto redes-sociales d-none d-lg-block">
            <a
              className="instagram"
              href="https://www.instagram.com/engels_prado"
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
      </nav>
    </header>
  );
};

export default Header;
