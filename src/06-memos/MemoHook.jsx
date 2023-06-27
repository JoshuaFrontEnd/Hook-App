import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const HeavyStuff = ( iterationNumber = 100 ) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos...');
  }

  return `${ iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

  const { state, increment } = useCounter( 4000 );
  const [show, setShow] = useState( true );

  const memorizedValue = useMemo( () => HeavyStuff( state ), [state] );

  return (
    <>

      <h1>Counter: <small>{ state }</small> </h1>
      <hr />

      <h4>{ memorizedValue }</h4>

      <button
        className='btn btn-primary'
        onClick={ () => increment( 1 ) }
      >
        +1
      </button>

      <button
         className='btn btn-outline-primary'
         onClick={ () => setShow( !show )}
      >
        Show/Hide { JSON.stringify( show ) }
      </button>

    </>
  )
}

/* ----------------------------------------------------------------
  APUNTES ADICIONALES

  - useMemo: memoriza valores, es un hook
  - Se usa para memorizar un valor cuando una o mas dependencias mantienen su valor/no cambian. El primer argumento es la función/callback que se vuelve a ejecutar si estas dependencias cambian. Devuelve una forma memorizada de la función

---------------------------------------------------------------- */
