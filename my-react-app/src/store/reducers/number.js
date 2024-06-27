const defaultState ={
  number : 0
}


const reducer = (state=defaultState , action)=>{
  if(action.type === 'increment'){
    return{
      number:state.number + action.payload
    }
  }

  if(action.type === 'discrement'){
    return{
      number: state.number - action.payload
    }
  }
  return state
}


export default reducer