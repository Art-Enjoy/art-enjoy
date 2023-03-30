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
  // const handleRemove = (id) => {
  //   const arr =cartProducts.filter((product) => product.id !== id);
  //   setCartProducts(arr);
  //   handlePrice();
  // };
  const handleRemove = (id) => {
    const arr =cartProducts.filter((product) => product.id !== id);
    setCartProducts(arr);
    localStorage.setItem("cartProducts", JSON.stringify(arr));
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <article>
      {cartProducts.map((product)=>(
    <div className="cart-box" key={product.id}>
      
          <div className= "img-cart" >
            <img src={product.img} alt="" />
            <h6 className="title-cart">{product.title}</h6>  
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
                <Modal.Title>Hemos recibido su pedido!</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body">Revise la bandeja de entrada de su correo electrónico. Le hemos enviado un email con el resumen de su pedido y debe seguir las intrucciones para finalizarlo.</Modal.Body>

            </Modal>

    
    </article>
  )
}

export default Cart

