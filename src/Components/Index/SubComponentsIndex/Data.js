export const proyectos = [
	{
		id: '1',
		titulo: 'Layback',
		img: '/static/img/surf.jpg',
		href: 'https://layback.com.ar/',
	},
	{
		id: '2',
		titulo: 'LM Pasteleria',
		img: '/static/img/pasteleria.jpg',
		href: 'https://licmarielleone.com.ar/',
	},
	{
		id: '3',
		titulo: 'Lic Mariel Leone',
		img: '/static/img/nutricion.jpg',
		href: 'https://licmarielleone.com.ar/',
	},
	{
		id: '4',
		titulo: 'Layback',
		img: '/static/img/surf.jpg',
		href: 'https://layback.com.ar/',
	},
	{
		id: '5',
		titulo: 'LM Pasteleria',
		img: '/static/img/pasteleria.jpg',
		href: 'https://layback.com.ar/',
	},
	{
		id: '6',
		titulo: 'Lic Mariel Leone',
		img: '/static/img/nutricion.jpg',
		href: 'https://licmarielleone.com.ar/',
	},
];

export const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

export const errores = {
	erroresNombreUno: 'El Nombre es Obligatorio',
	erroresNombreDos: 'El Nombre no es Valido',
	erroresEmailUno: 'El Email es Obligatorio',
	erroresEmailDos: 'El Email no es Valido',
	erroresAsuntoUno: 'El Asunto es Obligatorio',
	erroresMensajeUno: 'El Mensaje es Obligatorio',
};
