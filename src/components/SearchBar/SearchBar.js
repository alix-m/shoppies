import React, { useContext } from "react"
import './SearchBar.scss'

import { submit } from '../../utils/Search'
import { SearchContext }  from '../../context/SearchProvider'

const SearchBar = (props) => {

    const { dispatch } = useContext(SearchContext)

    const handleSubmit = async e => {
        e.preventDefault()
        
        let query = e.target[0].value
        let results = await submit(query)

        dispatch({
            type: 'SET_RESULTS', 
            payload: { query, results }
        })
    }

    return (
        <form id={ props.id } className="search-bar flex-row" onSubmit={ handleSubmit }>
            { props.children }
        </form>)
}


export default SearchBar
