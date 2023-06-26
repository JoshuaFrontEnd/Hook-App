import React from "react";

export const ShowIncrement = React.memo( ({ increment }) => {

  console.log('Me volvi a generar :(');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        // Para incrementar el contador en un cierta cantidad le puedo pasar esa cantidad como un argumento a esta función:
        increment( 5 );
      }}
    >
      Incrementar
    </button>
  )
})
