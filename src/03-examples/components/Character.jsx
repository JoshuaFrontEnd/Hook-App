import { useLayoutEffect, useRef, useState } from 'react';

export const Character = ({ image, name, species }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {

    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });

  }, [name])

  return (
    <>

    <div className="card" style={{ width: '18rem' }}>
      <img src={ image } className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 ref={ pRef } className="card-title d-inline-flex">{ name }</h5>
        <p className="card-text"><b>Species:</b> { species }</p>
      </div>
    </div>

    <code className='mt-3 d-block'>{ JSON.stringify(boxSize) }</code>

    </>
  )
}


/* ----------------------------------------------------------------
  APUNTES ADICIONALES

  - El Hook 'useLayoutEffect' es un Hook de React que es igual a 'useEffect', salvo con algunas diferencias:

  * useLayoutEffect: si necesita mutar el DOM y/o si necesita realizar mediciones

  * useEffect: si no necesita interactuar con el DOM o sus cambios de DOM no son observables (la mayoría de las veces debe usar esto).

  - El useEffect se ejecuta de manera asincrona es decir después de que la pantalla se actualiza visualmente y el useEffectLayout se ejecuta de manera sincrona es decir antes de que la pantalla se actualiza visualmente.

  Podría usarse cuando notas que la actualización parpadea visualmente, o cuando quieres agrupar varias actualizaciones en una, puedes probar con esto cambiando el useLayoutEffect por el useEffect y notarás ese ligero parpadeo con useEffect pero no con useLayoutEffect

  -
    Usando useEffect:

    1) Se setean las props y estados en memoria
    2) Se renderiza el componente
    3) Se ejecutan los cambios escritos dentro del useEffect
    4) El componente se renderiza por segunda vez con los cambios de estado que realizó el useEffect

    Usando useLayoutEffect:

    1) Se setean las props y estados en memoria
    2) Se ejecutan los cambios escritos dentro del useLayoutEffect
    3) Se renderiza el componente con todas sus props y los cambios de estado que realizó el useLayoutEffect

  -

    Flujo useEffect:

   * React renderiza el componente
   * Despues empieza a realizar los cambios en el DOM
   * El navegador pinta
   * Se ejecuta el useEffect

    Flujo useEffectlayout

   * React renderiza el componente
   * Despues empieza a realizar los cambios en el DOM
   * Se ejecuta el useLayoutEffect
   * El navegador pinta

---------------------------------------------------------------- */