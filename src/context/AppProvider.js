import React, { createContext, createReducer, useReducer, useCallback } from 'react'
import { AppReducer } from './AppReducer'

const initialState = { search: [], active: [], nominations: [] }

export const AppContext = createContext(initialState)
export const DispatchContext = createContext()

export const AppProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(AppReducer, initialState)

    const setResults = (query, results) => {
        dispatch({
            type: 'SET_RESULTS', 
            payload: { query, results }
        })
    }

    const setActive = active => {
        dispatch({
            type: 'SET_ACTIVE', 
            payload: { active }
        })
    }

    const addNomination = imdbID => {
        if(state.nominations.length == 3) return alert('can only nominate 5!')
        dispatch({
            type: 'ADD', 
            payload: { imdbID }
        })
    }

    const removeNomination = imdbID => {
        dispatch({
            type: 'REMOVE', 
            payload: { imdbID }
        })
    }

    const clearNominations = () => {

    }

    const isNominated = imdbID => {
        return state.nominations.includes(imdbID)
    }

    const getNominations = () => {
        return state.nominations
    }

    return (
        <DispatchContext.Provider value={{ addNomination, removeNomination }}>
            <AppContext.Provider value={{ 
                state,
                nominations: state.nominations, 
                setResults, 
                setActive, 
                clearNominations,
                getNominations,
                isNominated }}>
                { children } 
            </AppContext.Provider>
        </DispatchContext.Provider>
    )
}