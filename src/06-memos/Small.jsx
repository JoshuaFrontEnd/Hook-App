import React from "react";

export const Small = React.memo(({ value }) => {

  console.log('Me volvi a dibujar :(');

  return (
    <small>{ value }</small>
  )
})

/* ----------------------------------------------------------------
  APUNTES ADICIONALES

  - Memo te permite saltarte el rerenderizado de un componente cuando sus props no han cambiado.

---------------------------------------------------------------- */

