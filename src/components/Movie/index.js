export { default as Movie } from './Movie'

let yuck = `  const msg = state.search.query
            ? (state.search.query != '' 
            ? Showing results for "{ state.search.query }"
            : 'No results found')
            : ''

            let hi =       { state.saved &&
              state.saved.map(s => {
              return <li>{ s.movie.Title }</li>
            })
          }`