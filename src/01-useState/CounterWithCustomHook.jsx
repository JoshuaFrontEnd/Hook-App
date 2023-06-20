import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

  // Llamo a mi Custom Hook y como me retorna un objeto lo desestructuro para obtener la informacion que necesito
  const { state, increment, decrement, reset } = useCounter();
  const value = 2;

  return (
    <>
      <h1>Counter with Hook: { state }</h1>

      <hr />

      <button onClick={ () => increment(value) } className="btn btn-success">+{ value }</button>
      <button onClick={ reset } className="btn btn-primary">Reset</button>
      <button onClick={ () => decrement(value) } className="btn btn-danger">-{ value }</button>
    </>
  )


}

/* ----------------------------------------------------------------
  APUNTES ADICIONALES

  - Para pasar argumentos a la funcion llamada en el "onClick" se debe de hacer de la siguiente manera:

  onClick={ () => increment( argumento ) }

---------------------------------------------------------------- */
