import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

// Seteando el estado inicial, un array con dos objetos
const initialState = [{
  id: new Date().getTime(),
  description: 'Recolectar la piedra del alma',
  done: false
},
{
  id: new Date().getTime() * 300,
  description: 'Recolectar la piedra del alma',
  done: false
}]

export const TodoApp = () => {

  // Al Hook 'useReducer' se le envía como primer parámetro una funcion 'Reducer' por referencia, es decir, que no recibimos el resultado de la función, ya que se encargara el Hook de ejecutarla, y como segundo parámetro, el estado del componente
  // Del hook extraemos el estado que en este caso pasa a llamarse 'toDos' y con 'dispatch' vamos a despechar los cambios que necesitemos hacer para obtener un nuevo estado desde el 'Reducer' que acabos de pasar
  const [ toDos, dispatch ] = useReducer( todoReducer, initialState);

  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  )
}


