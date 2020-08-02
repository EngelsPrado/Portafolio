export default function validarContacto(valores, express, errores) {

    if( !valores.nombre ) {
        return express.erroresNombreUno;
    }

    return errores;
}