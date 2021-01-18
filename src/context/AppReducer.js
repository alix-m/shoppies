export const AppReducer = (state, action) => {

  switch(action.type){

    case 'SET_RESULTS':
      return { ...state, 
                  search: { query: action.payload.query, results: action.payload.results }}

    case 'SET_ACTIVE':
      return { ...state, active: action.payload.active }

    case 'ADD':
      //let nominee = state.search.results.find(n => n.imdbID == action.payload.imdbID)
      return { ...state, 
                  nominations: [ ...state.nominations, action.payload.imdbID ] }

    case 'ADD_NOMINEE':
      let nominee = state.search.results.find(n => n.imdbID == action.payload.imdbID)
      return { ...state, 
        nominations: [ ...state.nominations, nominee ] }

    case 'REMOVE':
      return {
        ...state,
        nominations: state.nominations.filter(n => {
          return n.imdbID !== action.payload.imdbID})
      }   

    case 'SAVED':
      return state.saved.find(obj => obj.imdbID === action.id)

    case 'CLEAR_MOVIES':
      return { ...state,
               nominations: [ ]
    }

    default:
      return state;
  }
}