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
      <h1>TodoApp (10), <small>pendientes: 2</small></h1>
      <hr />

      <div className='row'>

        <div className='col-7'>
          <ul className='list-group'>
            {
              toDos.map( toDo => (
                <li key={ toDo.id } className='list-group-item d-flex align-items-center justify-content-between'>
                  <span>Item 1</span>
                  <button className='btn btn-danger'>Borrar</button>
                </li>
              ))
            }

          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder='¿Qué hay que hacer?'
              className='form-control'
            />
            <button
              type='submit'
              className='btn btn-outline-primary mt-2'
            >
              Agregar
            </button>
          </form>
        </div>



      </div>


    </>
  )
}


