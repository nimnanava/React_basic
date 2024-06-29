import { useDispatch, useSelector } from "react-redux";
import { addLaptop, laptopSliceSelector } from "../store/reducers/laptopSlice";

import { useRef } from "react";

function LaptopComponat() {
  const laptop = useSelector(laptopSliceSelector);
  const dispatch = useDispatch();

  
  const price = useRef()
  const cpu = useRef()
  const gen = useRef()
  const ram = useRef()
  const hdd = useRef()

  const addLaptopHandle = () => {
    dispatch(addLaptop(
      price.current.value,
      cpu.current.value,
      gen.current.value,
      ram.current.value,
      hdd.current.value

    ));
  };
  return (
    <div>
      <div>
        <h4>Add laptop</h4>
        <input type="text" placeholder="enter price" ref={price}/>
        <input type="text" placeholder="enter cpu" ref={cpu}/>
        <input type="text" placeholder="enter gen" ref={gen}/>
        <input type="text" placeholder="enter ram" ref={ram}/>
        <input type="text" placeholder="enter hdd" ref={hdd}/>

        <button onClick={addLaptopHandle}>Add Lap</button>
      </div>

      {laptop.map((ele) => (
        <ul>
          <li>{ele.price}</li>

          <li>{ele.spec.hdd}</li>

          <li>{ele.price}</li>
        </ul>
      ))}
    </div>
  );
}

export default LaptopComponat;
