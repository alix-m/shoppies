import React, { createContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'

const initialState = { search: [], active: [], nominations: [], ref: [] }

export const AppContext = createContext(initialState)
export const DispatchContext = createContext()

export const AppProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(AppReducer, initialState)

    const setResults = (query, results) => {
        state.search = []
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
        if(state.nominations.length == 5){
            return alert('can only nominate 5!')}
        dispatch({
            type: 'ADD_NOMINEE', 
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
        dispatch({
            type: 'REMOVE', 
            payload: { imdbID }
        })
    }

    const isNominated = imdbID => {
        return state.nominations.find(n => n.imdbID == imdbID)
    }

    const getNominations = () => {
        return state.nominations
    }

    return (
        <DispatchContext.Provider value={{ addNomination, removeNomination, clearNominations }}>
            <AppContext.Provider value={{ 
                state,
                nominations: state.nominations, 
                setResults, 
                setActive, 
                getNominations,
                isNominated }}>
                { children } 
            </AppContext.Provider>
        </DispatchContext.Provider>
    )
}