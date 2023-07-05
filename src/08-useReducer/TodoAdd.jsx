import { useForm } from '../hooks/useForm';

// Creación del componente formulario ('TodoAdd') que servira para agregar nuevas cosas para hacer ('toDo') a la lista/estado/arreglo de cosas por hacer ('toDos')
// Recibo la propiedad 'onNewToDo' desde 'TodoApp.jsx' la cual es la función que se encarga de llamar al reducer que agregara las nuevas tareas escritas en el formulario
export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = ( event ) => {

    // Para evitar que al usar el 'onSubmit' del formulario se recargue la página
    event.preventDefault();

    // Validar que por lo menos se ingresen dos letras en el input del formulario
    if ( description.length <= 1 ) return;

    // Creando un nuevo objeto con la informacion de la descripcion tipeada en el input
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description
    };

    // Insertando el objeto creado al arreglo de las cosas por hacer ('toDos'), esta función esta declarada en el archivo 'TodoApp.jsx'
    onNewTodo( newTodo );

    // Limpiando el input cada vez que enviamos un valor
    onResetForm();

  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input
        type="text"
        placeholder='¿Qué hay que hacer?'
        className='form-control'
        name="description"
        value={ description }
        onChange={ onInputChange }
      />
      <button
        type='submit'
        className='btn btn-outline-primary mt-2'
      >
        Agregar
      </button>
    </form>
  )
}
