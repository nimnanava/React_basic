import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, numberSliceSelector } from "./store/reducers/numberSlice";
import LaptopComponat from "./Componat/LaptopComponat";



function App() {
  const number = useSelector(numberSliceSelector);


  
  const dispatch = useDispatch();
 
  return (
    <div>
      {number.number}
     
   

      <div>
        <button onClick={() => dispatch(increment(5))}>plus</button>
        <button onClick={() => dispatch(decrement(5))}>-plus</button>
      </div>

 
      <div>
       
       <LaptopComponat />
      </div>
    </div>
  );
}

export default App;
