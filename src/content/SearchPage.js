import React, { useContext, useEffect } from "react"

import SearchBar from '../components/SearchBar/SearchBar'
import TextInput from '../components/TextInput/TextInput'
import SearchResults from '../components/SearchResults/SearchResults'
import Modal from '../components/Modal/Modal'

import { SearchContext } from '../context/SearchProvider'

export const SearchPage = () => {

    const context = useContext(SearchContext)
    const { state } = context

    var visible = false

    useEffect(() => {
        if(state.active.movie) visible = 'visible'
    })

    return (
        <div className="search">
            <p>Get started on your Shoppies list by searching for a movie.</p>
            <div className="search-bar">
                <SearchBar id='search-title-year'>
                    <TextInput name="title" type="text" placeholder="Movie title*" />
                    <button type="submit" className="ease-in cursor">Search</button>
                </SearchBar>
            </div>
            <SearchResults/>
            <div className="modal-container">
                { state.active.movie && <Modal movie={ state.active.movie } visibility={ visible }/> }
            </div>
        </div>
    )

}

export default SearchPage