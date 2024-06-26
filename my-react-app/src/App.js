import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import PopUp from './Componat/PopUp'

function App() {
  const [data , setData] =useState([])
  const[reFetch , setReFetch] = useState(0)
  const popUp = useRef()

  useEffect(()=>{
    const controller = new AbortController()
    console.log('useEffect running....', controller.signal)

    axios.get('https://jsonplaceholder.typicode.com/posts', {
      signal : controller.signal
    })
    .then(res=>{
      console.log('get data')
      popUp.current.showPopUp()
     setData(res.data)
     setTimeout(()=>popUp.current.hidePopUp(),4000)
    })
  
    .catch(err=>console.log(err))


  return()=>{
    console.log('useEffect cleanup...')
    controller.abort()
  }
  },[reFetch])
  return (
    <div>
      <PopUp ref={popUp}/>
      <button onClick={()=> setReFetch(pre => pre+1)}>ReFetch</button>
      {data?.map((ele , i)=><h3 key={i}>{ele.title}</h3>)}
    </div>
  )
}

export default App
