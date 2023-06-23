import { useState } from "react";

// Acá estoy seteando que los datos del formulario que voy a enviar sean por defecto un objeto
export const useForm = ( initialForm = {} ) => {

  const [formState, setFormState] = useState( initialForm )

  const onInputChange = ({ target }) => {

    const { name, value } = target;

    console.log( { name, value });

    setFormState({

      ...formState,
      [ name ]: value

    });
  }

  // La variable 'initialForm' guarda el estado inicial del formulario, en este caso el estado inicial son valores de inputs vacios, por lo que si deseo 'limpiar/vaciar' los campos del formulario, puedo setear el formulario a su estado inicial
  console.log( JSON.stringify(initialForm)) ;

  const onResetForm = () => {
    setFormState( initialForm );
  }

  return {
    // Acá desestructuro el formulario, para poder acceder a sus campos en la funcion que llama a este custom Hook (Ej: username, password, etc).
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}

/* ----------------------------------------------------------------
  APUNTES ADICIONALES


---------------------------------------------------------------- */
