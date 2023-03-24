 import { createContext, useEffect, useState } from "react";
 import axios from "axios";





 const CartContext = createContext();

 export const CartProvider = ({ children }) => {
  
  
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios
      .get("http://localhost:3000/products")
       .then(({ data }) => setProducts(data.products));
   };

   const getProductsCart = async () => {
     return await axios
       .get("http://localhost:3000/products-cart")
      .then(({ data }) => setCartItems(data.productsCart))
      .catch((error) => console.error(error));
  };

   useEffect(() => {
     getProducts();
     getProductsCart();
   }, []);

  const addItemToCart = async (product) => {
     const { title, img, price,location } = product;

     await axios.post("http://localhost:3000/products-cart", { title, img, price,location });

     getProducts();
     getProductsCart();
   };

   const editItemToCart = async (id, query, amount) => {
     if (query === "del" && amount === 1) {
       await axios
         .delete(`http://localhost:3000/products/${id}`)
         .then(({ data }) => console.log(data));
     } else {
       await axios
         .put(`http://localhost:3000/products/${id}?query=${query}`, {
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
