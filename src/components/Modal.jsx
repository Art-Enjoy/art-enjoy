import React from 'react';
import "./Modal.css"

const Modal = ({ isModalOpen, selectLocation, filteredProducts, handleCloseModal }) => {
  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Actividades en {selectLocation}</h2>
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.id}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;