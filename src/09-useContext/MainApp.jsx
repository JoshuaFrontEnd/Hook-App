import { UserProvider } from './context/UserProvider';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const MainApp = () => {
  return (
    <UserProvider>

      <Navbar />

      <hr />

      <div>
        <Outlet />
      </div>

    </UserProvider>
  )
}


/* ----------------------------------------------------------------
  APUNTES ADICIONALES

  - High Order Components: Es basicamente un componente que tiene mas componentes adentro
  - Contexto: toda una estructura de High Order Components
  - UserContext: Para evitar pasar datos usando la estructura 'Padre - Hijo' es mejor utilizar un Contexto, de esta manera los datos quedan disponibles para cualquier componente de manera descentralizada y accesible desde cualquier parte de la aplicacion, con esta funcion creamos un nuevo contexto
  - UserProvider: Con este archivo seteamos y proveemos los datos que queremos que esten disponibles para toda la aplicacion
  - UseContext: Hook de React que sirve para obtener acceso a los datos declarados en el 'UserProvider.jsx', para obtener un contexto especifico de los datos pasarle como atributo el nombre del contexto creado en 'UserContext.jsx'

---------------------------------------------------------------- */