import React from 'react';

import WrapperBlue from '../Components/WrapperBlue';

//Aos Bblioteca JS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Servicios = () => {

	//Inicializo
	AOS.init();

	return (
		<>
			<WrapperBlue titulo="Servicios" />
			<main className="secciones">
				<section className="container servicios">
					<div className="row">
						<div className="col-12" data-aos="fade-up">
							<p className="mb-4">
								Te ofrezco el mejor servicio en relacion calidad/precio,
								me ocupo de hacer realidad lo que siempre soñaste, ya sea
								un E-Comerce, un blog, o lo que estes buscando!
							</p>
						</div>
						<div className="col-12 col-md-6 mb-4" data-aos="fade-up">
							<div className="card">
								<i className="icon-code" />
								<h4 className="titulos-h4">Diseño y desarrollo web</h4>
								<p>
									Diseño y desarrollo web utilizando lo último en
									tecnologías web: PHP, HTML5, CSS3, JAVA y MYSQL.
									Sitios institucionales, blogs, tiendas online,
									corporativos, etc.
								</p>
							</div>
						</div>
						<div
							className="col-12 col-md-6 offset-md-6 mb-4"
							data-aos="fade-up"
						>
							<div className="card">
								<i className="icon-basket" />
								<h4 className="titulos-h4">E-comerce</h4>
								<p>
									Construyo tu propio sitio de venta online con
									catálogos de productos, donde tus clientes podrán
									realizar sus compras de manera sencilla y confiable..
								</p>
							</div>
						</div>
						<div className="col-12 col-md-6 mb-4" data-aos="fade-up">
							<div className="card">
								<i className="icon-mobile" />
								<h4 className="titulos-h4">Diseños Responsivos</h4>
								<p>
									Los sitios se pueden ver y navegar de manera simple y
									atractiva en todos los dispositivos móviles, llegando
									así a tener más potenciales clientes.
								</p>
							</div>
						</div>
						<div
							className="col-12 col-md-6 offset-md-6 mb-4"
							data-aos="fade-up"
						>
							<div className="card">
								<i className="icon-share" />
								<h4 className="titulos-h4">
									Posicionamiento en Buscadores
								</h4>
								<p>
									Técnicas de SEO que permitirán a tu sitio tener un
									caudal de visitas importante, lo que generará más
									ventas aumentando la rentabilidad de tu negocio.
								</p>
							</div>
						</div>
					</div>
					<div className="row" data-aos="fade-up">
						<div className="col-12">
							<h3 className="titulos-index">Paquetes Web</h3>
							<p className="mb-5">
								Te ofrezco algunos paquetes estándar, así como proyectos
								personalizados. Mis diseños web se especializan en la
								creación profesional de sitios únicos.
							</p>
						</div>
					</div>
					<div className="row planes-costos">
						<div className="col-12 col-lg-4 wrapper">
							<div className="plan">
								<h5>Landing Page</h5>
								<div className="plan-body">
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										Tiempo - 7 dias
									</p>
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										Responsive
									</p>
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										Social Links
									</p>
									<p>-</p>
									<p>-</p>
									<p>-</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-4 wrapper">
							<div className="plan">
								<h5>Web Development</h5>
								<div className="plan-body">
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										Tiempo - 15 dias
									</p>
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										5 Bloques
									</p>
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										Social Links
									</p>
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										Seccion de Entradas
									</p>
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										Seccion de Contacto
									</p>
									<p>-</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-4 wrapper">
							<div className="plan">
								<h5>eCommerce</h5>
								<div className="plan-body">
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										Tiempo - 15 dias
									</p>
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										5 Bloques
									</p>
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										Social Links
									</p>
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										Seccion de Ventas
									</p>
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										Seccion de Contacto
									</p>
									<p>
										<span>
											<i className="icon-ok" />
										</span>
										Paquete SEO
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default Servicios;