import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

  const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/');

  // Acá queda pendiente explicar la forma en que desestructuro la data de la API
  // const { author, quote } = false;
  const { quote, author } = (!isLoading && data.length>0) && data[0];

  console.log( { author, quote } );

  // Una manera sencilla de hacer un loading
  // if ( isLoading ) {
  //   return (
  //     <h1>Cargando...</h1>
  //   )
  // }

  return (
    <>
      <h1>Random Fake Quotes</h1>
      <hr />

      {
        isLoading
          ? (
            <div className="alert alert-info text-center">Loading...</div>
          )
          : (
            <blockquote className="blockquote text-end">
              <p className="mb-1">{ quote }</p>
              <footer className="blockquote-footer">{ author }</footer>
            </blockquote>
          )
      }

    </>
  )
}
