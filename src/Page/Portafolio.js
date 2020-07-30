import React from 'react';

import WrapperBlue from '../Components/WrapperBlue';

//Aos Bblioteca JS
import AOS from 'aos';
import 'aos/dist/aos.css';

//Carousel
import Carousel from './../Components/Index/SubComponentsIndex/Carousel';

const Portafolio = () => {
	//Inicializo
	AOS.init();

	return (
		<>
			<WrapperBlue titulo="Ultimo Proyecto" />

			<main className="secciones">
				<section className="container portafolio" data-aos="fade-up">
					<div className="row">

						<Carousel/>

					</div>
					<div className="row align-items-center">
						<div className="col-12 order-1 col-md-4 order-md-0 mb-5 mb-md-0">
							<p>
								<strong>Cliente: </strong>Licenciada Mariel Leone
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
							<h4 className="titulos-index">Licenciada Mariel Leone</h4>
							<p>
								La nueva temporada de productos Dino trajo aparejado la
								producción de nuevos materiales POP para la linea
								librería. La mayor complejidad radicaba en que estos
								materiales estarían presentes en muchas cadenas, muy
								distintas todas y con características diferentes.
							</p>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Fugit, ut! Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Corrupti quas officia doloribus dolores?
								Corrupti doloribus aliquid inventore ipsam explicabo
								minus!
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Portafolio;
