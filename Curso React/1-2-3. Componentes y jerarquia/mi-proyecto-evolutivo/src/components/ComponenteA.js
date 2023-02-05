import React from "react";
import "../stylesheets/ComponenteA.css";
import ComponenteB from "./ComponenteB";

class ComponenteA extends React.Component {
  render () {
    return(
      <div className="contenedor-contacto">
        <div className="contenedor-datos-contacto">
          <h1>Nombre: {this.props.name}</h1>
          <h2>Apellido: {this.props.surname}</h2>
          <p>Email: {this.props.email}</p>
        </div>
        <div className="contenedor-conectado">
          <p>
            Conectado: 
            <span className={this.props.online ? "conectado" : "no-conectado"}>
              <ComponenteB online={this.props.online} />
            </span>
          </p>
        </div>
      </div>
    )
  }
}


export default ComponenteA;