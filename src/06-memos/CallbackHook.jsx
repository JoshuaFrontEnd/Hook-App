import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

  const [counter, setCounter] = useState( 10 );

  const increment = useCallback(
    // Acá 'valorAincrementar' viene de 'increment( 5 )' declarado en 'ShowIncrement.jsx', esto es el valor por el cual quiero incrementar el contador
    // El valor de 'c' es el valor del contador
    ( valorAincrementar ) => {
      setCounter( ( c ) => c + valorAincrementar );
    },
    [],
  )


  // const increment = () => {
  //   setCounter( counter + 1 )
  // }

  return (
    <>
      <h1>useCallback Hook: { counter } </h1>
      <hr />

      <ShowIncrement increment={ increment } />
    </>
  )
}

/* ----------------------------------------------------------------
  APUNTES ADICIONALES

  - useCallback: memoriza funciones, es un hook

---------------------------------------------------------------- */
