// Creacion de un array con un arreglo base, que servira como 'estado' inicial
const initialState = [{
  id: 1,
  toDo: 'Recolectar la piedra del Alma',
  done: false,
}]

// Creacion del 'Reducer', es basicamente una función comun y corriente, que recibe dos parametros, el 'estado' que en este caso si no se declara tomara como valor inicial lo que haya en 'initialState' y la 'acción' que le dira al 'Reducer' como se cambiara el 'estado'
// Para que la 'accion' no la tome como 'undefined' le asigno por defecto un objeto vacio
const todoReducer = ( state = initialState, action = {} ) => {

  if ( action.type === '[TODO] add toDo') {
    // El estado no debe mutar nunca en React, por lo que no se debe usar '.push()' a pesar de que este metodo funcione, lo mejor es hacerlo de esta manera
    // Acá se esta retornando un nuevo estado sin modificar el estado inicial
    return [ ...state, action.payload ];
  }

  // Siempre tiene que retornar un estado, el estado inicial nunca se modifica
  return state;
}

let toDos = todoReducer();

//  Creacion del nuevo estado:
const newTodo = [{
  id: 2,
  toDo: 'Recolectar la piedra del Poder',
  done: false,
}]

// Creando la acción:
const addTodoAction = {
  // Al crear una acción, existe un estandar, que es agregar un 'type' que es basicamente un texto, que especifica lo que estoy haciendo
  type: '[TODO] add toDo', // Esta es la acción
  // Y por otro lado existe el 'payload' que especifica el nuevo estado que quiero setear
  payload: newTodo // Esto es lo que va adentro de la acción
}

// Llamo al Reducer pasando el nuevo estado y la acción que reemplazara el estado actual por el nuevo
toDos = todoReducer( toDos, addTodoAction );

console.log({ state: toDos });




/* ----------------------------------------------------------------
  APUNTES ADICIONALES

  - ¿Qué es un Reducer?

    1.- Es una función común y corriente, no puede ser asíncrona
    2.- Debe ser una función pura, es decir,que no debe tener efectos secundarios, todo lo que esa función realice, debe resolverse de manera interna sin necesidad de llamar a otras funciones
    3.- Debe de retornar un nuevo estado, no se debe mutar el estado anterior, no debe llamar al localStorage o sessionStorage
    4.- Usualmente sólo recibe dos argumentos, que son, el valor inicial y la acción a ejecutar

  - ¿Para que se utilizan?

    La idea es tener controlado en un solo lugar, todas las acciones que modifican el state/estado de la aplicación, y de esta forma podemos ver, de manera general, todas las posibles modificaciones que la aplicación tiene o puede realizar

---------------------------------------------------------------- */