import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  // Con el Hook 'useContext' obtenemos los datos declarados en el 'provider' (UserProvider.jsx) y para saber el tipo del contexto es necesario pasarle como atributo el nombre del 'contexto' creado en 'UserContext.jsx'
  // Como declare el 'setUser' en 'useContext' lo puedo extraer directamente desde ahí
  const { user, setUser } = useContext( UserContext );

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        {/* Mostrando los datos obtenidos desde el 'useContext' */}
        { JSON.stringify( user, null, 3 ) }
      </pre>

      <button
        className='btn btn-primary'
        onClick={ () => setUser({ id: 123, name: 'Juan', email: 'juan@gmail.com' }) }
      >
        Establecer Usuario
      </button>

    </>
  )
}