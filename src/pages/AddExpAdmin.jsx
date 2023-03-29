import "./AddExpAdmin.css"
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { productHandler } from '../handler/productHandler';




const AddExpAdmin = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");
  const [units, setUnits] = useState("");
  const [location, setLocation] = useState("");
  //const [img, setImg] = useState("");
  const [imgBase64, setImgBase64] = useState(null);
const [imgFile, setImgFile] = useState(null);

  const handleTitleChange = (event) => {
    let titleInput = event.target.value;
    setTitle(titleInput);
  };
  const handlePriceChange = (event) => {
    let priceInput = event.target.value;
    setPrice(priceInput);
  };
  const handleDescriptionChange = (event) => {
    let descriptionInput = event.target.value;
    setDescription(descriptionInput);
  };
  const handleUnitsChange = (event) => {
    let unitsInput = event.target.value;
    setUnits(unitsInput);
  };

  const handleLocationChange = (event) => {
    let locationInput = event.target.value;
    setLocation(locationInput);
  };
  // const handleImgChange = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setImg(reader.result)
  //   };
    
  //};
  const handleImgBase64Change = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgBase64(reader.result)
    };
  }
  const handleSubmitBase64 = (event) => {
    event.preventDefault();
    let newProductBase64RequestModel = { title, description, price, units, location, imgBase64 };
    console.log(newProductBase64RequestModel);
    productHandler.addProductImgBase64(newProductBase64RequestModel);

  };
  
  const handleImgFileChange = (event) => {
    const file = event.target.files[0];
    setImgFile(file);
  }
  const handleSubmitFile = (event) => {
    event.preventDefault();
    let newProductFileRequestModel = { title, price, imgFile };
    productHandler.addProductImgFile(newProductFileRequestModel);
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   let newProduct = { title, description, price, units, location, img, file };
  //   console.log(newProduct)
  //   productHandler.addProduct(newProduct);
  //   event.target.reset()
  // };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// Union de handleShow Modal handleSubmitBase64 

  const handleSubmit = (event) => {
    event.preventDefault();
    handleShow();
    let newProductBase64RequestModel = { title, description, price, units, location, imgBase64 };
    console.log("esto viene del componente",newProductBase64RequestModel);
    productHandler.addProductImgBase64(newProductBase64RequestModel);

  }
  return (
    <div className="container-form">
      <form onSubmit={handleSubmit} itemID="form1">
        <h1>¿Qué experiencia quieres añadir?</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Título</label>
          <input name="title" type="text"
            placeholder="Ingrese título de la experiencia" className="form-control" onChange={handleTitleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input name="price" type="text"
            placeholder="Ingrese precio" className="form-control" onChange={handlePriceChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">Descripción</label>
          <input name="description" type="text"
            placeholder="Ingrese descripción" className="form-control" id="input-description" onChange={handleDescriptionChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="units" className="form-label">Unidades</label>
          <input name="units" type="number" min="1" max="25" className="form-control" placeholder="Ingrese tikets disponibles" onChange={handleUnitsChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">Localización</label>
          <input name="location" type="text"
            placeholder="Ingrese ubicación" className="form-control" onChange={handleLocationChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">Imagen</label>
          <input name="img" type="file" className="form-control" onChange={handleImgBase64Change} />
        </div>

        <button type="submit" className="btn btn-primary" id="btn" onClick={handleSubmit}>Añadir</button>

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
export default AddExpAdmin;
