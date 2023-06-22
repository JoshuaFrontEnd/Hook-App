import { useEffect, useState } from "react";

export const Message = () => {

  // useEffect(() => {

  //   console.log('Message Mounted');

  //   // El return en el useEffect sirve para desmontar/limpiar (unmount/cleanup) lo que acabo de disparar en el useEffect (Para probar bien este ejemplo de los console.logs desactivar el modo estricto de React)
  //   return () => {
  //     console.log('Message UnMounted');
  //   }
  // }, []);

  const [coords, setCoords] = useState({ x: 0, y: 0});

  useEffect(() => {

    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    }

    window.addEventListener( 'mousemove', onMouseMove );

    return () => {
      // Cuando asignamos comportamientos, en este caso un eventListener, siempre al desmontar el componente se debe de remover el comportamiento que se agregó
      window.removeEventListener( 'mousemove', onMouseMove );
    }
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      { JSON.stringify( coords )}
    </>
  )
}
