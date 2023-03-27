import React,{ useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardUser.css";
import "./DashboardAdmin.css";

import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import NavbarUser from "../components/NavbarUser";
// import { productHandler } from "../handler/productHandler";




function DashboardUser() {
 
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const { products} = useLoaderData();
  const [productsData,] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const data = productsData.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.toLowerCase().includes(searchQuery.toLowerCase())||
      product.location.toLowerCase().includes(searchQuery.toLowerCase())

  );
 


  return (
   
    
    <div className="container-gn" id="text">
      <h1>Todas las experiencias</h1>
    <>
      <div className="container-bar">
        <input
          className="searchStyle"
          type="text"
          placeholder="🔍 Buscar por experiencia o localización"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="cards">
        {data.map((product) => {
          return (
            <div key={product.id} className="card-dash" style={{ width: '18rem' }}>
              <Link to={`/expdetailuser/${product.id}`}><Card.Img variant="top"className="img-size" src={product.img} /></Link>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.location}</Card.Text>
                <p class="clasification">
                <input id="radio1" type="radio" name="estrellas" value="5"></input>
                <label className="stars"for="radio1">★</label>
                <input id="radio1" type="radio" name="estrellas" value="4"></input>
                <label className="stars"for="radio1">★</label>
                <input id="radio1" type="radio" name="estrellas" value="3"></input>
                <label className="stars" for="radio1">★</label>
                <input id="radio1" type="radio" name="estrellas" value="2"></input>
                <label className="stars" for="radio1">★</label>
                <input id="radio1" type="radio" name="estrellas" value="1"></input>
                <label className="stars" for="radio1">★</label>

                </p>
                <Link to={`/expdetailuser/${product.id}`}>
                  <Button className="btn-detail" >Detalles</Button>
                </Link>
              </Card.Body>
            </div>
          );
        })}
      </div>
    </>
    </div>
  );
}

export default DashboardUser;