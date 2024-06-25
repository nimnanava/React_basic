
import useMyFetchData from '../Hooks/useMyFetchData'
import  {  useRef } from 'react'

function Common() {

  const inputData = useRef()

  const [data ,getData] = useMyFetchData('photos')
  console.log(data)
  

  const click = ()=>{
    getData(inputData.current.value)
  }


  return (
    <div>
   <input ref={inputData} type='text' placeholder='What you want to search'/>
   <button onClick={click}>Submit</button>
   
    </div>
  )
}

export default Common
