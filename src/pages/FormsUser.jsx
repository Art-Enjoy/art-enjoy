import React from 'react'

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const FormsUser = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-form">
   <form >
        
          <h3>Comprar entradas</h3>
          <div className="mb-3">
            <label>Tipo de entrada</label>
            <input
              type="text"
              className="form-control"
              placeholder="Adult@/Niñ@"
            />
          </div>
          <div className="mb-3">
            <label>Cantidad</label>
            <input
              type="number"
              className="form-control"
              placeholder="Unidades..."
            />
          </div>
          <div className="mb-3">
            <label>Fecha</label>
            <input
              type="number"
              className="form-control"
              placeholder="--/--/----"
            />
          </div>
          <div className="mb-3">
            <label>Hora</label>
            <input
              type="number"
              className="form-control"
              placeholder="--:--"
            />
          </div>
          <div className="mb-3">
            <label>Nombre y apellidos</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre/Apellidos"
            />
          </div>
          <div className="mb-3">
            <label>Teléfono</label>
            <input
              type="number"
              className="form-control"
              placeholder="+34---------"
            />
          </div>
          <div className="mb-3">
            <label>DNI</label>
            <input
              type="tnumber"
              className="form-control"
              placeholder="--------X"
            />
          </div>
          <div className="mb-3">
            <label>Email </label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingrese email"
            />
          </div>
          <div className="mb-3">
            <label>Método de pago</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tarjeta de crédito / Paypal"
            />
          </div>
       
          <button type="submit" id="btn" onClick={handleShow}>Comprar</button>
            
              <Modal className="modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Todo correcto!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">Su experiencia ha sido añadida</Modal.Body>

              </Modal>
            
          
        </form>
      
    </div>
  );
};

export default FormsUser

