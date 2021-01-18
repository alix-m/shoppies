import './Search.scss'

import React, { useContext } from "react"
import { TextInput } from '../TextInput'

import { search } from '../../utils/ApiRequest'
import { AppContext }  from '../../context/AppProvider'

const Search = props => {

    const { setResults } = useContext(AppContext)

    const handleSearch = async e => {
        e.preventDefault()
    
        let query = e.target[0].value
        let results = await search(query)
        
        setResults(query, results)
    }

    return (
        <form id={props.id} className="search-bar flex-row" onSubmit={ handleSearch }>
            <TextInput name="title" type="text" placeholder="Movie title*" />
            <button type="submit" className="ease pointer">Search</button>
        </form>
        )
}


export default Search