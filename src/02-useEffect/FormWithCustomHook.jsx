import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

  // Acá le estoy enviando mi formulario al custom Hook (useForm) que cree para procesar la información
  // En el return del custom Hook (useForm) desestructuro el formulario para poder acceder a sus campos desde acá:
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

  // Como envie el formulario a mi custom hook (useForm), y allá en el return lo desestructure, ya no es necesario desestructurarlo acá
  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }

      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="correo@gmail.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={ password }
        onChange={ onInputChange }
      />

      <button onClick={ onResetForm } className='btn btn-primary mt-2'>Reset</button>

    </>
  )
}

/* ----------------------------------------------------------------
  APUNTES ADICIONALES

---------------------------------------------------------------- */


