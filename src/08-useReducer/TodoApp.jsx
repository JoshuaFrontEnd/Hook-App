import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

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
  // Del hook extraemos el estado que en este caso pasa a llamarse 'toDos' y con 'dispatch' vamos a despachar los cambios que necesitemos hacer para obtener un nuevo estado desde el 'Reducer' que acabo de pasar
  const [ toDos, dispatch ] = useReducer( todoReducer, initialState);

  const handleNewTodo = ( toDo ) => {

    // Creando la funcionalidad que agrega nuevos elementos a la lista de tareas a través del formulario, usando el reducer
    const action = {
      type: '[TODO] Add Todo',
      payload: toDo
    }

    dispatch( action );
  }

  return (
    <>
      <h1>TodoApp (10), <small>pendientes: 2</small></h1>
      <hr />

      <div className='row'>

        <div className='col-7'>

          <TodoList toDos={ toDos } />

        </div>

        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr />

          <TodoAdd onNewTodo={ handleNewTodo } />

        </div>



      </div>


    </>
  )
}


