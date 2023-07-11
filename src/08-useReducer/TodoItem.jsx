export const TodoItem = ({ toDo, onDeleteTodo }) => {
  return (
    <li className='list-group-item d-flex align-items-center justify-content-between'>
      <span>{ toDo.description }</span>
      <button
        className='btn btn-danger'
        onClick={ () => onDeleteTodo( toDo.id )}
      >Borrar</button>
    </li>
  )
}
