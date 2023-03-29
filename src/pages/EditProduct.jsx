import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { productHandler } from "../handler/productHandler";


function EditProduct() {
    const { product } = useLoaderData();
    const id = product.id;
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [units, setUnits] = useState(product.units);
    const [description, setDescription] = useState(product.description);
    const [location, setLocation] = useState(product.location);
    const [img, setImg] = useState(product.img);
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
    const handleImgChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImg(reader.result)
        };
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedProduct = { title, description, price, units, location, img };
        productHandler.updateProduct(id, updatedProduct);
        event.target.reset()
    };
    return (
        <><h1>Editando la producteriencia: {product.title}</h1>
            <div className="container-form">
                <form onSubmit={handleSubmit} itemID="form1">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input name="title" type="text" className="form-control" placeholder={product.title} onChange={handleTitleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input name="price" type="text" className="form-control" placeholder={product.price} onChange={handlePriceChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="description">Description</label>
                        <input name="description" type="text" className="form-control" id="input-description" placeholder={product.description} onChange={handleDescriptionChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="units" className="form-label">Units</label>
                        <input name="units" type="number" className="form-control" placeholder={product.units} onChange={handleUnitsChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input name="location" type="text" className="form-control" placeholder={product.location} onChange={handleLocationChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">Image</label>
                        <input name="img" type="file" className="form-control"
                            onChange={handleImgChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" id="btn-E">Update</button>
                </form>
            </div></>
    );
};
export default EditProduct;