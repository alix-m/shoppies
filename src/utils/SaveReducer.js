
export const SaveReducer = (state, action) => {

  switch(action.type){
    case 'ADD':
      return{
        ...state,
        saved: [action.payload, ...state.saved],
        loading: false
      }
    case 'REMOVE':
      return{
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
  case 'CLEAR':
      return{
          ...state,
          transactions: [action.payload, ...state.transactions]
      }
    default:
      return state;
  }


}
  