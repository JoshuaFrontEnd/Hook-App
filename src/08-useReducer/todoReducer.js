// Creacion del Reducer a usar en 'TodoApp', le paso el 'estado inicial' y si no viene le seteo por defecto un arreglo vacío, tambien le paso la accion que retorna el nuevo estado
export const todoReducer = ( initialState = [], action ) => {

  // Si 'action.type' cumple el 'case' se ejecuta
  switch ( action.type ){
    case 'ABC':
      // Este error, es en el caso de que todavia no haya creado la funcionalidad para este caso, recomendacion del profesor, ya que si no se implementa el error podria dar un falso positivo
      throw new Error('Action.type = ABC no esta implementada');

    default:
      return initialState;
  }

}