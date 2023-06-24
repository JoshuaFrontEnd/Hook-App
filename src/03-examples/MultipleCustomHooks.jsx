import { useCounter, useFetch } from "../hooks";

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
          ? (
            <div className="alert alert-info text-center">Loading...</div>
          )
          : (
            <div className="card" style={{ width: '18rem' }}>
              <img src={ image } className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ name }</h5>
                <p className="card-text"><b>Species:</b> { species }</p>
              </div>
            </div>
          )
      }

      <button className="btn btn-primary mt-3" onClick={ ()=>{ increment(1) } } disabled={ isLoading }>Next Character</button>

      { console.log('state: ' + state) }

    </>
  )
}
