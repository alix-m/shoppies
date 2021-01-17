export const AppReducer = (state, action) => {

  switch(action.type){

    case 'SET_RESULTS':
      return { ...state, 
                  search: { query: action.payload.query, results: action.payload.results }}

    case 'SET_ACTIVE':
      return { ...state, active: action.payload.active }

    case 'ADD':
      return { ...state, 
                  nominations: [ ...state.nominations, action.payload.imdbID ], status: 'success' }

    case 'REMOVE':
      return {
        ...state,
        nominations: state.nominations.filter(n => {
          return n !== action.payload.imdbID})
      }   

    case 'SAVED':
      return state.saved.find(obj => obj.imdbID === action.id)

    case 'CLEAR_MOVIES':
      return { ...state,
               transactions: [action.payload, ...state.transactions]
    }

    default:
      return state;
  }
}

const initialState = { search: [], active: [], nominations: [] }