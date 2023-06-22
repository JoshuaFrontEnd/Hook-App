import { useEffect } from "react";

export const Message = () => {

  useEffect(() => {

    console.log('Message Mounted');

    // El return en el useEffect sirve para desmontar/limpiar (unmount/cleanup) lo que acabo de disparar en el useEffect (Para probar bien este ejemplo de los console.logs desactivar el modo estricto de React)
    return () => {
      console.log('Message UnMounted');
    }
  }, [])


  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  )
}
