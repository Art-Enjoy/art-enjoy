import { useState } from "react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);
  console.log(cartProducts)

  const removeCartProducts = () => {
    localStorage.removeItem("cartProducts");
    setCartProducts([]);
  }

  return (
    <div>
      {cartProducts.map((products) => {
        return (
          <>
            <h1>{products.title}</h1>
            <p>{products.price}</p>
          </>
        )
      })}
      <button onClick={() => removeCartProducts()}>clear cart</button>
    </div>
  )
}

export default Cart