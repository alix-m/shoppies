import './SearchResults.scss'
import React, { useContext, useState, useEffect } from "react"
import { AppContext } from '../../context/AppProvider'
import { Movie } from '../Movie'

export const SearchResults = () => {

  const { state, getNominations } = useContext(AppContext)

  return (
    <section className="section search-results">
      <div className="">
      { getNominations() }
      </div>
      <h2 className="">
      </h2>
      <div className="grid">
        { state.search.results &&
          state.search.results.map(result => {
            return <Movie key={ result.imdbID } movie= { result } />
          })
        }
      </div>
    </section>
  )
}

export default SearchResults;
