import React from "react";
import '../estilos/Directiva.css';

function Directiva(props) {
  return (
    <div className='contenedor-directiva'>
      <img
        className="imagen-directiva"
        src={require(`../imagenes/directiva-${props.imagen}.png`)}
        alt="Foto de Rebeca" />
      <div className="contenedor-texto-directiva">
        <p className="nombre-directiva"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-directiva">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-directiva">"{props.directiva}"</p>
      </div>
    </div>
  );
}

export default Directiva;