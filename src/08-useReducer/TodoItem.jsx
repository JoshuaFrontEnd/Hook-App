export const TodoItem = ({ toDo }) => {
  return (
    <li className='list-group-item d-flex align-items-center justify-content-between'>
      <span>{ toDo.description }</span>
      <button className='btn btn-danger'>Borrar</button>
    </li>
  )
}
