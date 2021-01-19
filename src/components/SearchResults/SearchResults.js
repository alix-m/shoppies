import React, { useContext, useState, useEffect } from "react"
import { AppContext } from '../../context/AppProvider'
import { Movie } from '../Movie'

export const SearchResults = () => {

  const { state, } = useContext(AppContext)

  const getMessage = () => {
    if(!state.search.results && !state.search.query){
      return ''
    } else if(!state.search.results && state.search.query){
      return `No results found for ${ query }`
    } else if(state.search.results){
      return `Showing ${ state.search.results.length } results for ${ state.search.query }`
    }
  }

  return (
    <section className="margin-top search-results">
      <p>{ getMessage() }</p>
      <div className="grid">
        {state.search.results &&
         state.search.results.length > 0 &&
          state.search.results.map(result => {
            return <Movie movie={result} />
          })
        }
      </div>
    </section>
  )
}

export default SearchResults;
