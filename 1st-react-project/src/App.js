import { useState } from "react"
import './App.css'
import './unit'





const App = ()=>{
  const[imageUrl ,setImageUrl] = useState('')
  const[name ,setName] = useState('')
  const[city ,setCity] = useState('')
  const[position ,setPosition] = useState('')
 
  const [myData, setMydata] = useState([])

return(
  <div className="main_Container">
    <div className="main_left">
      <input type="text" placeholder="" value={imageUrl} onChange={(e)=>{
        e.preventDefault()
        setImageUrl(e.target.value)
      }
      }/>
      <input type="text" placeholder="" value={name}onChange={(e)=>{
        e.preventDefault()
        setName(e.target.value)

      }
      }/>
      <input type="text" placeholder="" value={city}onChange={(e)=>{
        e.preventDefault()
        setCity(e.target.value)
      }
      }/>
      <input type="text" placeholder="" value={position}onChange={(e)=>{
        e.preventDefault()
        setPosition(e.target.value)

      }
      }/>
      <button onClick={()=> 
        { setMydata(pre=>{
          return [...pre,{
            image:imageUrl,
            name,
            city,
            position,
          }]
        })
          

          setImageUrl((pre)=>{
            if(pre.length>0){
              return '';
            }else{
              return pre;
            }
          });
          setName(pre=>pre.length>0?(""):(pre))
          setCity(pre=>pre.length>0?(""):(pre))
          setPosition(pre=>pre.length>0?(""):pre)
        }
      }>Submit</button>
    </div>
    <div className="main_right">
        {myData?.map(({image,name,city,position},index)=><Unit
        image={image}
        name ={name}
        city={city}
        position={position}
        key ={index}
        />)}
    </div>
  </div>
)
}

export default App