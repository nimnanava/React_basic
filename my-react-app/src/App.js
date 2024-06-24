import React from 'react'
import useMyFetchData from './Hooks/useMyFetchData'

const App = () => {

  const data = useMyFetchData("photos")
  console.log(data)
  return (
    <div>
   
    </div>
   
  )
}

export default App
