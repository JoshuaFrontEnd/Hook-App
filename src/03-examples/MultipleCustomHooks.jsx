import { useCounter, useFetch } from "../hooks";
import { LoadingCharacter, Character } from "./components";

export const MultipleCustomHooks = () => {

  const { state, increment } = useCounter(1);

  console.log('state: ' + state);

  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ state }`);

  // Acá queda pendiente explicar la forma en que desestructuro la data de la API
  // const { author, quote } = false;
  const { name, species, image } = !!data && data;

  console.log( { name, species, image } );

  // Una manera sencilla de hacer un loading
  // if ( isLoading ) {
  //   return (
  //     <h1>Cargando...</h1>
  //   )
  // }

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <hr />

      {
        isLoading
        ? <LoadingCharacter />
        : <Character image={ image } name={ name } species={ species } />
      }

      <button className="btn btn-primary mt-3" onClick={ ()=>{ increment(1) } } disabled={ isLoading }>Next Character</button>

      { console.log('state: ' + state) }

    </>
  )
}
