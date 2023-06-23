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

  return {
    // Acá desestructuro el formulario, para poder acceder a sus campos en la funcion que llama a este custom Hook (Ej: username, password, etc).
    ...formState,
    formState,
    onInputChange
  }
}
