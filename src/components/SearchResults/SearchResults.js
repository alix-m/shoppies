import './SearchResults.scss'
import React, { useContext, memo } from "react"
import Movie from '../Movie/Movie'
import { SearchContext } from '../../context/SearchProvider'

const SearchResults = () => {

  const context = useContext(SearchContext)
  const { state } = context;

  const msg = state.search.query
            ? (state.search.query != '' 
            ? `Showing results for "${ state.search.query }"`
            : 'No results found')
            : ''

  return (
    <section className="section search-results">
      <h2 className="">
        { msg }
      </h2>
      <div className="grid">
        { state.search.results &&
          state.search.results.map(r => {
          return <Movie movie={r} />
        })
      }
      </div>
    </section>
  )
}

export default SearchResults;