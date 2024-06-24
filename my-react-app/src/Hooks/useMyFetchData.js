import React, { useEffect, useState } from 'react'



function useMyFetchData(Location="posts") {

  const url ="https://jsonplaceholder.typicode.com/"



  const[ data , setData] = useState([])

  const  getData = async()=>{
    try{
  const res = await fetch(url)
  const data = await res.json()
  if(data){
    return data
  }else{
    return ([])
  }
    }catch(err){
      console.log(err)
      return([])
    }
  }

  useEffect(()=>{
    const myData = async ()=>{

      const fetchData = await getData(`${url+Location}`)
      setData(fetchData)

    }

    if (url && Location){
        myData()
     
    }

  },[url , Location])

  return data

}

export default useMyFetchData
