import { useEffect, useState } from 'react';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'ioshi',
    email: 'ioshi@gmail.com'
  })

  // Al asignar estos valores como "value" a los inputs del formulario, estos no podran ser cambiados mediante el tipeo del input, debido a que react mantiene el estado, para poder modificar el formulario mediante el tipeo, hay que crear una funcion que cambie el estado del componente
  const { username, email } = formState;

  // Al tipear en el input, activo el evento 'onChange', con esta funcion puedo ir modificando el valor del input cada vez que escriba nuevos valores
  // Del 'evento' puedo desestructurar el 'target'
  const onInputChange = ({ target }) => {

    // Del 'target', puedo desestructurar el 'name' y el 'value' del input
    const { name, value } = target;

    console.log( { name, value });

    setFormState({

      ...formState,
      /*
        Acá lo que esta sucediendo, es que me traigo todo
        el objeto en su 'estado actual' usando 'spread'
      */

      [ name ]: value
      /*
        En esta desestructuración, usando propiedades
        computadas, le digo a javascript que haga 'match'
        de la propiedad 'name' del input con el nombre de
        alguna propiedad existente en el objeto del
        'useState', y que le asigne el 'value' del mismo
        input a la propiedad con la que hizo match. Ejemplo:

        Al tipear en un input se activa el evento
        'onChange', javascript busca el valor de 'name'
        en ese input.

        Suponiendo que se tipeo el siguiente input:

        <input
          type="text"
          name="username"
          value="loqueacabodetipear"
        />

        el valor que encuentra javascript es 'username'

        Despues busca en el 'useState' una propiedad que
        tenga el mismo nombre del valor que encontró. En
        este caso encuentra la propiedad 'username' con el
        valor de 'ioshi':

        useState({ username: 'ioshi'})

        Cuando encuentra esta propiedad, javascript
        reasigna/sobreescribe su valor, por el del 'value'
        del input, por lo que el nuevo estado queda
        actualizado así:

        useState({ username: 'loqueacabodetipear'});

      */

    });
  }

  // Al pasarle un arreglo vacío el useEffect se disparara una sola vez
  useEffect(() => {
    console.log('useEffect called!');
  }, []);

  // Acá el useEffect se disparara siempre que cambie el formState
  useEffect(() => {
    console.log('formState changed!');
  }, [formState]);

  // Acá el useEffect se disparara siempre que cambie el email
  useEffect(() => {
    console.log('email changed!');
  }, [email]);


  return (
    <>
      <h1>Formulario Simple</h1>
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

    </>
  )
}

/* ----------------------------------------------------------------
  APUNTES ADICIONALES

  ¿Por que se colocan corchetes?
  Ej: [target.name]:target.value

  Se llaman computed properties, como el state es un objeto, se esta agregando una nueva propiedad, la propiedad toma su nombre del valor de lo que esta dentro de los corchetes ejemplo con js:

    const objeto = { variable: "bar", variable2: "foo" };

    const nuevoObjeto = {
      [objeto.variable] : "esta propiedad se llama bar",
      [objeto.variable2]: "esta propiedad se llama foo",
    }

    console.log(nuevoObjeto);

    output:
    {
      bar: "esta propiedad se llama bar",
      foo: "esta propiedad se llama foo"
    }

  Otra explicación:

  Es parte de la desestructuración que puedas computar el nombre de una propiedad como un objeto literal. Para esto se utilizan los corchetes, para que lo entiendas mejor te doy un ejemplo:

    let key = "z";

    En este caso, deseamos que el valor de key que es 'z', sea la referencia al nombre de la propiedad del objeto a desestructurar y que se cree una variable o una constantes llamada 'foo'.

    let { [key]: foo } = { z: "bar" };

    Seria igual a realizar:

    let { z: foo } = { z: "bar" };

    Esto con la finalidad de obtener el valor de la propiedad 'z' que se encuentra en el objeto en cuestión.

    console.log(foo);

    output:
    "bar"

  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  https://exploringjs.com/es6/ch_destructuring.html#_computed-property-keys
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

  Otra explicación:

  cuando usa dentro de una etiqueta input el name='name' value={name} , quiere decir que el input tendra una propiedad llamada name con el valor 'name', esto sirve para poder indentificar ese input (por ejemplo). podria ser name='campoNombre'  ,  name='inputNombre' , es para poder identificarlo

  luego al usar value ={name} quiere decir que el valor de ese input(lo que tendra adentro escrito) , es el valor que tiene la  constante 'name' , esa constante se esta extrayendo a travez de la desestructuracion de formValue , lo cual formValue lo saca del useState.  osea tengo const [formValue , setFormValue] = useState({name='' , email=''}) , desestructuro ... const {name , email} = formValue

  bueno.  ahora vamos con lo de target

  el utiliza una funcion llamada handleInputchange, que recibe por parametro 'e' , que seria el evento.  ese evento adentro tiene la propiedad target.  esa propiedad creo que hace referencia al input que llama a la funcion handleInputchange.

  quiere decir, que si <input name='name' value={name} onChange={handleInputChange}/>   cambia de valor osea se le escribe algo,  llama al onChange, la cual llama a handleInputchange,

  esta etiqueta o referencia de etiqueta estaria dentro de 'e.target'

  ahora ...  mas adelante el desestructura lo que es 'e' , ({target}) => {..} para no estar usando  e.target.name , e.target.value,  entonces al desestructurar solamente usa target.name , target.value,

  bueno,  cuando el usa [ target.name ]: target.value , quiere decir que ... cambie el valor de la propiedad que tiene formValue (en nuestro caso tiene 2 propiedades 'name' , 'email') ... con respecto al target.name que estoy recibiendo.   si el input name='name' llamada al handleinputchange entonces target.name va a ser igual a 'name' ,  si el input name='email' llamada al handleinputchange entonces target.name 'email'.

  y que valor se le asigna target.name, bueno se le asigna el target.value, quiere decir que si en input name='name' escribiste 'pepe' ese target.value es igual a 'pepe' , lo cual se le pone dentro del target.name.

---------------------------------------------------------------- */


