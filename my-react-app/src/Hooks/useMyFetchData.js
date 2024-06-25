import  { useEffect, useState } from "react";

function useMyFetchData(Location , id=null) {
  const url = "https://jsonplaceholder.typicode.com/";

  const [data, setData] = useState([]);

  const getData = async (getLocation= Location, getId=id) => {
    try {
      const res = await fetch(`${url + getLocation}/${getId?getId:''}`);
      const data = await res.json();
      if (data) {
        console.log("get data from db");
        setData(data);
      } else {
        console.log("con not get data from db");
        setData([]);
      }
    } catch (err) {
      console.log(err);
      return [];
    }
  };

   useEffect(()=>{

    let canGetData = true
    if (canGetData){
      getData();
    }
 

    return()=>{
      console.log('useEffect clenup')
      canGetData = false
    }
   },[])



  return [data, getData];
}

export default useMyFetchData;
