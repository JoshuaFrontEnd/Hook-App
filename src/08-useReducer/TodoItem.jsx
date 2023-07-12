export const TodoItem = ({ toDo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className='list-group-item d-flex align-items-center justify-content-between'>
      <span
        className={` ${ toDo.done && 'text-decoration-line-through' } `}
        onClick={ () => onToggleTodo( toDo.id ) }
      >
        { toDo.description }
      </span>
      <button
        className='btn btn-danger'
        onClick={ () => onDeleteTodo( toDo.id )}
      >Borrar</button>
    </li>
  )
}
