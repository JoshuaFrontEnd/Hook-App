import { useRef } from 'react';

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector('input').select();
    console.log( inputRef );
    inputRef.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input
        // Con el atributo 'Ref' propio de react, puedo crear la referencia y despues setearla con 'useRef'
        ref={ inputRef }
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button
        className="btn btn-primary mt-2"
        onClick={ onClick }
      >Set focus
      </button>

    </>
  )
}

/* ----------------------------------------------------------------
  APUNTES ADICIONALES

  - El Hook 'useRef' es un Hook de React que nos sirve para manejar el valor de una variable que podemos modificar, pero al hacer el cambio, no disparar una re renderización del componente

---------------------------------------------------------------- */
