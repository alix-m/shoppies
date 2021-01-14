import './SearchResults.scss'
import React from "react"
import Movie from '../Movie/Movie'

export const SearchResults = props => {

  const getResults = () => {
    var results = props.results
    var elements = []
    for(let i in results){
      elements.push(<Movie movie={ results[i] }/>)
    }
    return elements;
  }

    return (
        <section className="section search-results">
          <h2 className="padding-r">Showing results for [ query ]</h2>
          <div className="grid padding-r">{ getResults() }</div>
        </section>
    )
}

export default SearchResults;

