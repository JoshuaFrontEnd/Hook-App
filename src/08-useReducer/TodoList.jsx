import { TodoItem } from './TodoItem';

// Recibo el estado de la lista desde 'TodoApp', si no viene seteo por defecto el estado en un arreglo vacio
export const TodoList = ({ toDos = [] }) => {
  return (
    <ul className='list-group'>
      {
        toDos.map( toDo => (
          <TodoItem key={ toDo.id } toDo={ toDo } />
        ))
      }
    </ul>
  )
}
