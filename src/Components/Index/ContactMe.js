import React from 'react';

//Aos Bblioteca JS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactMe() {
	//Inicializo
	AOS.init();

	return (
		<section className="container contacto-index" id="contacto">
			<div className="row" data-aos="fade-up">
				<div className="col-12 wrapper-titulo">
					<h3 className="titulos-index">Estemos en contacto</h3>
				</div>
				<div className="col-12 col-lg-6 contacto-info">
					<p>
						<i className="icon-location"></i> Rosario, Santa Fe
					</p>
					<p>
						<i className="icon-mail"></i> consultas@mmdiseños.com.ar
					</p>
					<p>
						<i className="icon-whatsapp"></i> 3415 486863
					</p>
					<iframe
						title="Ubicacion"
						className="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26783.87649454841!2d-60.64013315000001!3d-32.951417000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1dc9b6d36f%3A0x97b9e9584d94d851!2sMonumento%20Hist%C3%B3rico%20Nacional%20a%20la%20Bandera!5e0!3m2!1ses!2sar!4v1593563745303!5m2!1ses!2sar"
					></iframe>
				</div>
				<div className="col-12 col-lg-6 formulario">
					<form>
						<div className="form-group row">
							<div className="col-12 col-lg-6 form-nombre-email">
								<label htmlFor="nombre">
									<i className="icon-user" />
								</label>
								<input
									name="nombre"
									placeholder="Nombre"
									id="nombre"
									type="text"
								/>
							</div>
							<div className="col-12 col-lg-6 form-nombre-email">
								<label htmlFor="email">
									<i className="icon-mail" />
								</label>
								<input
									name="email"
									placeholder="Email"
									id="email"
									type="email"
								/>
							</div>
						</div>
						<div className="form-group row">
							<div className="col-12 form-asunto">
								<label htmlFor="asunto">
									<i className="icon-pencil" />
								</label>
								<input placeholder="Asunto" id="asunto" type="text" />
							</div>
						</div>
						<div className="form-group row">
							<div className="col-12">
								<textarea placeholder="Dejame tu mensaje..." />
							</div>
							<div className="col-12">
								<button type="submit" className="boton-enviar">
									Enviar
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
