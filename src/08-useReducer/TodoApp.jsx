import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

  const { toDos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

  return (
    <>
      <h1>TodoApp (10), <small>pendientes: 2</small></h1>
      <hr />

      <div className='row'>

        <div className='col-7'>

          {/* Acá envio el estado de la lista ('toDos') al componente 'TodoList' */}
          <TodoList
            toDos={ toDos }
            onDeleteTodo={ handleDeleteTodo }
            onToggleTodo={ handleToggleTodo }
          />

        </div>

        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr />

          {/* Envio la función que se encargara de agregar nuevas tareas por hacer a las ya existentes, al componente que creara esas tareas ('TodoAdd.jsx') */}
          <TodoAdd
            onNewTodo={ handleNewTodo }
          />

        </div>



      </div>


    </>
  )
}


