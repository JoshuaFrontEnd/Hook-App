import { useState } from 'react';

// Si no viene el valor de "initialValue" por defecto sera de 10
export const useCounter = ( initialValue = 10 ) => {

  const [state, setState] = useState( initialValue );

  // Para incrementar o decrementar el valor en un numero especifico, puedo solicitarlo ese numero al momento de llamar la funcion
  const increment = ( value ) => {
    setState( state + value );
  }

  const decrement = ( value ) => {
    setState( state - value );
  }

  const reset = () => {
    setState( initialValue );
  }


  // Retorno un objeto con el estado
  return {
    state,
    increment,
    decrement,
    reset
  }
}

/* ----------------------------------------------------------------
  APUNTES ADICIONALES

  - Al tener un "Custom Hook" puedo separar una funcionalidad especifica del resto del codigo, y tenerla disponible para reutilizarla en otras funcionalidades, sin tener que repetir codigo

---------------------------------------------------------------- */