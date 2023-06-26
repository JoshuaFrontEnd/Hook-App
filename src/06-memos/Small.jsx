import React from "react";

export const Small = React.memo(({ value }) => {

  console.log('Me volvi a dibujar :(');

  return (
    <small>{ value }</small>
  )
})

/* ----------------------------------------------------------------
  APUNTES ADICIONALES

  - Memo te permite saltarte el re-renderizado de un componente cuando sus props no han cambiado
  - Memoriza componentes, es un HOC (Higher Order Components)
  - Más info acá: https://ewebik.com/react-js/hoc

---------------------------------------------------------------- */

