import { TodoItem } from './TodoItem';

// Recibo el estado de la lista desde 'TodoApp', si no viene seteo por defecto el estado en un arreglo vacio
export const TodoList = ({ toDos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className='list-group'>
      {
        toDos.map( toDo => (
          <TodoItem
            key={ toDo.id }
            toDo={ toDo }
            onDeleteTodo={ onDeleteTodo }
            onToggleTodo={ onToggleTodo }
          />
        ))
      }
    </ul>
  )
}
