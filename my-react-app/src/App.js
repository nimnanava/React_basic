import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLaptop } from "./Store/reducers/laptopSlice";
import { addItemToCart, selectCart } from "./Store/reducers/cartSlice";

function App() {
  const laptop = useSelector(selectLaptop);
  const cart = useSelector(selectCart);

  const distpatch = useDispatch();
  console.log(cart);

  let Total = 0;
  if (Array.isArray(cart)) {
    cart.map((ele) => {
      Total = Total + ele.count * ele.price;
    });
  }

  let cartCount = 0;
  cart.forEach((ele)=>{
    cartCount = cartCount + ele.count
  })

  return (
    <div>
      {laptop.map(({ price, cpu, ram, id }, i) => (
        <p key={id}>
          {price} | {cpu} | {ram}
          <button onClick={() => distpatch(addItemToCart(id, price, cpu, ram))}>
            Add To Cart
          </button>
        </p>
      ))}

      <br />

      <h1>Cart</h1>
      <hr />

      <h3>{cartCount}</h3>

      <h3>Total : rs {Total}</h3>
    </div>
  );
}

export default App;
