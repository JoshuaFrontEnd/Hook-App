import { useCounter, useFetch } from "../hooks";
import { LoadingCharacter, Character } from "../03-examples/components";

export const Layout = () => {

  const { state, increment } = useCounter(1);

  console.log('state: ' + state);

  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ state }`);

  const { name, species, image } = !!data && data;

  console.log( { name, species, image } );

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
