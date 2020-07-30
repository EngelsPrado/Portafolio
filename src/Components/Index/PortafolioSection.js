import React from 'react';

import {proyectos} from './SubComponentsIndex/Data';
import Proyecto from './SubComponentsIndex/Proyecto';

export default function PortafolioSection() {
	return (
		<section className="portfolio-index container">
			<div className="row">
				<div className="col-12 wrapper-titulo">
					<h3 className="titulos-index">Portafolio</h3>
				</div>
				{
					proyectos.map((proyecto) => (
							
					<Proyecto
						key={proyecto.id}
						{...proyecto}
					/>
						
					))
				}
			</div>
		</section>
	);
}
