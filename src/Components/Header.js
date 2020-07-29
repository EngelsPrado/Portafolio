import React from 'react';

const Header = () => {

	return (
		<header className="nav-hide" id="header">
			<nav className="container">
				<div className="row mm-wrapper justify-content-between align-items-center">
					<figure className="contenedor-logo col-auto">
						<a className="brand-menu" to="/">
							<img src="/static/img/logo.png" alt="Logo Mirco Martin" />
						</a>
						<a className="btn-menu" id="btn-menu">
							<i className="icono icon-menu" aria-hidden="true" />
						</a>
					</figure>
					<ul className="menu col-12 col-md-9" id="enlaces">
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
					<section className="col-auto redes-sociales d-none d-lg-block">
						<a
							className="instagram"
							href="https://www.instagram.com/layback.ar"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="icon-instagram" />
						</a>
						<a
							className="facebook"
							href="https://www.facebook.com/mircocmartin"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="icon-facebook" />
						</a>
						<a
							className="linkedin"
							href="https://www.linkedin.com/in/mirco-martin-a3b70670"
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
}

export default Header;