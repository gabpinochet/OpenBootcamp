import React from "react";

class ComponenteB extends React.Component {
  render () {
    return (
      <>
        {this.props.online ? "Contacto en línea" : "Contacto no disponible"}
      </>
    )
  }
}

export default ComponenteB;