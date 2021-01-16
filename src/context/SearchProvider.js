import React, { createContext, useReducer } from 'react'
import { SearchReducer } from '../reducer/SearchReducer'

const initialState = { search: [], active: [] }

export const SearchContext = createContext(initialState)

export const SearchProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(SearchReducer, initialState)

    return (
        <SearchContext.Provider value={{ state, dispatch }}>
            { children } 
        </SearchContext.Provider>
    )
}
