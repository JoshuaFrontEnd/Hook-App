// Creacion del Reducer a usar en 'TodoApp', le paso el 'estado inicial' y si no viene le seteo por defecto un arreglo vacío, tambien le paso la accion que retorna el nuevo estado
export const todoReducer = ( initialState = [], action ) => {

  // Si 'action.type' cumple el 'case' se ejecuta
  switch ( action.type ){

    // Caso para agregar elementos nuevos a la lista de tareas
    // Para construir un caso de uso ('case'), se puede escribir cualquier cosa, y esta tiene que hacer match con la propiedad 'type' del objeto 'action' que enviamos en el dispatch del Hook 'useReducer' (esto especificamente lo estoy haciendo en 'TodoApp.jsx'), no hay reglas definidas para las palabras a utilizar, pero en el ejemplo a continuación este parece ser un buen formato:
    case '[TODO] Add Todo':
      // Este error, es en el caso de que todavia no haya creado la funcionalidad para este caso, recomendacion del profesor, ya que si no se implementa el error podria dar un falso positivo
      // throw new Error('Action.type = ABC no esta implementada');

      // Al cumplirse el 'case' regreso un nuevo estado donde envio el estado actual (arreglo) '...initialState', más el nuevo elemento que actualiza el estado, en este caso, lo que se definio en el objeto 'action' que fue enviado mediante la funcion 'dispatch' del Hook 'useReducer' declarado en 'TodoApp.jsx'
      console.log([ ...initialState, action.payload ]);
      return [ ...initialState, action.payload ]

    // Caso para eliminar un elemento 'toDo' en especifico
    case '[TODO] Remove Todo':
      return initialState.filter( toDo => toDo.id !== action.payload );

    // Por defecto si no se cumple ningun caso retorno siempre el estado actual del objeto
    default:
      return initialState;
  }

}