 import { createContext, useEffect, useState } from "react";
 import axios from "axios";





 const CartContext = createContext();

 export const CartProvider = ({ children }) => {
  
  
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios
      .get("https://localhost:7132/Product")
       .then(({ data }) => setProducts(data.products));
   };

   const getProductsCart = async () => {
     return await axios
       .get("https://localhost:7132/Product")
      .then(({ data }) => setCartItems(data.productsCart))
      .catch((error) => console.error(error));
  };

   useEffect(() => {
     getProducts();
     getProductsCart();
   }, []);

  const addItemToCart = async (product) => {
     const { title, img, price,location } = product;

     await axios.post("https://localhost:7132/Product", { title, img, price,location });

     getProducts();
     getProductsCart();
   };

   const editItemToCart = async (id, query, amount) => {
     if (query === "del" && amount === 1) {
       await axios
         .delete(`https://localhost:7132/Product/${id}`)
         .then(({ data }) => console.log(data));
     } else {
       await axios
         .put(`https://localhost:7132/Product/${id}?query=${query}`, {
           amount,
         })
         .then(({ data }) => console.log(data));
     }

    getProducts();
    getProductsCart();
   };

  return (
    
     <CartContext.Provider
       value={{ cartItems, products, addItemToCart, editItemToCart }}
     >
       {children}
     </CartContext.Provider>
   );
 };

export default CartContext;
