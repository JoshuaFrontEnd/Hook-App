import { useState } from "react";

// export const CounterApp = () => {

//   const [counter, setCounter] = useState({
//     counter1: 10,
//     counter2: 20,
//     counter3: 30,
//   });

//   const { counter1, counter2, counter3 } = counter;

//   return (
//     <>
//       <h1>Counter { counter1 }</h1>
//       <h1>Counter { counter2 }</h1>
//       <h1>Counter { counter3 }</h1>

//       <hr />

//       <button
//         className="btn btn-dark"
//         onClick={ () => setCounter({
//           counter1: counter1 + 1,
//           counter2: counter2,
//           counter3: counter3,
//         }) }>+1</button>
//     </>
//   )
// }

// REFACTORIZANDO EL CODIGO ANTERIOR CON UNA MEJOR SINTAXIS
export const CounterApp = () => {

  // Usando "state" se entiende mucho mejor que estamos trabajando con el "estado" del componente
  const [state, setState] = useState({
    state1: 10,
    state2: 20,
    state3: 30,
  });

  const { state1, state2, state3 } = state;

  return (
    <>
      <h1>Counter { state1 }</h1>
      <h1>Counter { state2 }</h1>
      <h1>Counter { state3 }</h1>

      <hr />

      <button
        className="btn btn-dark"
        onClick={ () => setState({
          // En vez de escribir todo el objeto nuevamente es mejor utilizar el operador "spread" traerse todo el objeto, y solo escribir los valores que seran actualizados/modificados
          ...state,
          state1: state1 + 1
        }) }>+1</button>
    </>
  )
}

/* ----------------------------------------------------------------
  APUNTES ADICIONALES

  - Cuando usamos el Hook "useState" y en el valor/estado por defecto hay un "objeto" y queremos cambiar/actualizar el estado, tenemos que preservar los valores del objeto que no seran cambiados. Con la función "setCounter" actualizamos el estado, creando un nuevo objeto, preservando los valores que no queremos cambiar, y modificando los valores que deseamos actualizar

---------------------------------------------------------------- */