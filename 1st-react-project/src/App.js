
import { useState } from 'react';
import './App.css';
import Main from './Components/Main';
import myData from './data/myData' ;





function App() {




  const [inputVal, setInputVal] = useState(0)

  
const clickHandle = () => {
setTimeout(()=>{
  console.log('i am cliked')

setInputVal((pre)=>{
  if(pre<1){
    return pre+1
  }else if(pre<2){
    return pre+3
  }else{
    return pre+2
  }
});
}, 1000);
}
// console.log(inputVal);
  const mainBlok = myData.map(({name , city, position, id}) => {
    return <Main key={id} name={name} city={city} position={position} />
  });

  const inputChangeHandle = (event , data)=>{
    event.preventDefault()
    console.log(data)
    setInputVal(event.target.value)
  }
 
  return (
    <div className='main_container'>
  <h1>{inputVal}</h1>

    
    <div className='mainBlok_container'>
      {mainBlok}
      <br /><br />
      <button style={
        {
          fontSize:'12px',
          border : '1px solid red',
          padding: '7px 12px'
        }
      }
      
      onClick={clickHandle}
      >Click Me</button>
      </div>


    </div>
  );
}

export default App;
