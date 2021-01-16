import React from 'react'

export const SearchReducer = (state, action) => {

  switch(action.type){

    case 'SET_RESULTS':
      return { ...state, 
                  search: { query: action.payload.query, results: action.payload.results }}

    case 'ADD':
      return { ...state, 
                  nominations: [ state.nominations, action.selection] }

    case 'SET_ACTIVE':
      console.log(action.selection)
      return { ...state, active: action.selection }

    case 'UNSET_ACTIVE':
      console.log(action.selection)
      return { ...state, active: null }

    case 'REMOVE_MOVIE':
      return state.filter(movie => 
                          movie.id !== id)

    case 'CLEAR_MOVIES':
      return { ...state,
               transactions: [action.payload, ...state.transactions]
    }

    default:
      return state;
  }
}