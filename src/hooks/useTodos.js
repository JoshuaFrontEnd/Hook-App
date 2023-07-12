import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

// Seteando el estado inicial, un array con dos objetos
const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false
  // }
]

// Acá obtengo la información guardada en el 'localStorage', para poder utilizar esta funcion, debo pasarsela al Hook 'useReducer' como parametro
const init = () => {
  // Para retonar un objeto guardado en el 'localStorage' utilizo el metodo 'parse' del objeto 'JSON' de javascript ya que en el 'localStorage' se guardan los objetos en formato de cadenas de caracteres (texto plano), con el metodo 'parse' convierto la cadena de caracteres en un objeto literal para poder acceder a esa información
  // Para obtener la información del 'localStorage', debo acceder a la variable que contiene esa información usando el metodo 'getItem' del objeto 'localStorage', en este caso la variable se llama 'toDos'
  // Por otro lado, si no existe la variable en el 'localStorage' o no hay información, seteo un arreglo vacío para que no reviente la aplicación
  return JSON.parse( localStorage.getItem( 'toDos' ) ) || [] ;
}

export const useTodos = () => {

  // Al Hook 'useReducer' se le envía como primer parámetro una funcion 'Reducer' por referencia, es decir, que no recibimos el resultado de la función, ya que se encargara el Hook de ejecutarla, y como segundo parámetro, el estado del componente
  // Del hook 'useReducer' extraemos el estado que en este caso pasa a llamarse 'toDos' y con 'dispatch' vamos a despachar los cambios que necesitemos hacer para obtener un nuevo estado desde el 'Reducer' que acabo de pasar
  // Para inicializar el 'estado' del 'reducer' con información guardada en el 'localStorage', podemos utilizar el tercer parametro del Hook 'useReducer', comunmente se setea con la palabra 'init' pero puede llamarse de cualquier forma
  const [ toDos, dispatch ] = useReducer( todoReducer, initialState, init );

  //Para poder guardar en el 'localStorage' la información que quiero ir agregando a la lista de tareas necesito usar el metodo 'setItem', con este metodo primero defino una variable, en este caso de nombre 'toDos' y segundo, defino la información a guardar, en este caso quiero guardar el estado de la aplicación cada vez que se agregue un nuevo elemento a la lista de tareas de cosas por hacer, por lo tanto necesito usar 'setItem' dentro del Hook 'useEffect', ya que este Hook va a detectar cada vez que se agregue un nuevo elemento
  // En el 'localStorage' no se pueden guardar objetos de manera literal o en formato JSON, por lo que hay que usar el metodo 'stringify' del objeto 'JSON' para convertir el objeto a guardar en una cadena de caracteres (texto plano)
  useEffect(() => {
    localStorage.setItem( 'toDos', JSON.stringify( toDos ) );
  }, [toDos])


  // Creando la funcionalidad que agrega nuevos elementos a la lista de tareas a través del formulario, usando el reducer
  // Esta funcion recibe desde 'TodoAdd.jsx' el nuevo objeto (cosa por hacer 'toDo') ('onNewTodo( newTodo )'), acá 'newTodo' pasa a ser 'toDo'
  const handleNewTodo = ( toDo ) => {

    // Y para agregar/insertar el objeto 'toDo' al arreglo de objetos 'initialState' (que es el estado inicial), debo crear un objeto 'action' (definido en el Hook 'useReducer') declarando una propiedad 'type' que tendra el caso de uso y un 'payload' que sera donde se declarara el nuevo objeto 'toDo'
    const action = {
      type: '[TODO] Add Todo',
      payload: toDo
    }

    // Con la funcion 'dispatch' del Hook 'useReducer' envio el objeto 'action' al reducer, en este caso 'todoReducer' (declarado en el archivo 'TodoReducer.js')
    dispatch( action );
  }

  // Función para eliminar un elemento 'toDo' en especifico desde el 'todoReducer.js'
  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  // Toggle tarea completada/pendiente
  const handleToggleTodo = ( id ) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }

  return {
    toDos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }

}
