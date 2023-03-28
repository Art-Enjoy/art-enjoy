import { useState,useEffect } from "react";
import "./Cart.css"
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

const Cart = () => {
  const [cartProducts, setCartProducts,] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);
 console.log(cartProducts)
  
  const [price, setPrice] = useState(0);

  const removeCartProducts = () => {
    localStorage.removeItem("cartProducts");
    setCartProducts([]);
  }
  const handleRemove = (id) => {
    const arr =cartProducts.filter((product) => product.id !== id);
    setCartProducts(arr);
    handlePrice();
  };

  const handleChange = (product, d) => {
    const ind = cartProducts.indexOf(product);
    const arr = [...cartProducts];
    arr[ind] = { ...arr[ind], units: parseInt(arr[ind].units) + parseInt(d) };
    
    if (arr[ind].units <= 0) arr[ind].units = 1;
    setCartProducts(arr);
    handlePrice(); 
  };
  
  const handlePrice = () => {
    let total = 0;
    cartProducts.map((product) => (total += parseInt(product.price) * parseInt(product.units)));
    setPrice(total);
  };
  
  useEffect(() => {
    handlePrice();
  }, [cartProducts]);
  
  // const handleChange = (product, d) => {
  //   const ind = cartProducts.indexOf(product);
  //   const arr = [...cartProducts];
  //   arr[ind] = { ...arr[ind], units: parseInt(arr[ind].units) + parseInt(d) };
    
  //   if (arr[ind].units <= 0) arr[ind].units = 1;
  //   setCartProducts(arr);
  //   handlePrice();
  // };
 

  // const handlePrice = () => {
  //   let total = 0;
  //  cartProducts.map((product) => (total += parseInt(product.price ) ));
  //   setPrice(total);
     
  //   };
  //   useEffect(() => {
  //   handlePrice();
  //   });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <article>
      {cartProducts.map((product)=>(
    <div className="cart-box" key={product.id}>
      
          <div className= "img-cart" >
            <img src={product.img} alt="" />
            <h1>{product.title}</h1>  
          </div>
          <div>
          <button onClick={() => handleChange(product, 1)}>+</button>
            <button>{product.units}</button>
            <button onClick={() => handleChange(product, -1)}>-</button>
          </div>
          <div>
            <span>{product.price}</span>
            <button onClick={() => handleRemove(product.id)}>Borrar</button>
          </div>
          
        </div>
      ))}
        
        <Button className="remove" onClick={() => removeCartProducts()}>Vaciar carrito</Button>
      <div className="total">
        <span>Cantidad total</span>
        <span>{price}€</span>
      </div>
      <button type="submit" id="btn" onClick={handleShow}>Comprar</button>
            
            <Modal className="modal" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Todo correcto!</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body">Su experiencia ha sido añadida</Modal.Body>

            </Modal>

    
    </article>
  )
}

export default Cart

