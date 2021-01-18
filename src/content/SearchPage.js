import React from "react"
import { Search } from '../components/Search'
import { SearchResults } from '../components/SearchResults'

export const SearchPage = () => {

    return (
        <div className="search">
            <p>Get started on your Shoppies list by searching for a movie.</p>
            <div className="search-bar">
                <Search id='search-title-year'/>
            </div>
            <SearchResults/>
        </div>
    )
}

export default SearchPage
