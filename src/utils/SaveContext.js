import React, { createContext, useReducer } from 'react'

const initialState = {
    saved: []
}

export const SaveContext = createContext(initialState)

export const SaveContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(SaveReducer, initialState)

    const add = payload => {
        dispatch({ type: 'ADD', payload })
    }

    const remove = payload => {
        dispatch({ type: 'REMOVE', payload })
    }

    const clear = () => {
        dispatch({ type: 'CLEAR' })
    }

    const values = {
        add,
        remove,
        clear
    }

    return(
        <SaveContext.Provider value={ contextValue }>
            { children }
        </SaveContext.Provider>
    )

}

export default SaveContext