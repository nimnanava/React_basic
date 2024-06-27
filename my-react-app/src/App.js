import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const number =useSelector(store=>store.number)
  const dispatch = useDispatch()
  return (
    <div>
      {number}
      <div>
        <button onClick={()=>{
          dispatch({
            type: 'increment',
            payload : 7
          })
        }}>Increment</button>
        <button  onClick={()=>{
          dispatch({
            type: 'discrement',
            payload : 3
          })
        }}>Discrement</button>
      </div>
    </div>
  )
}

export default App
