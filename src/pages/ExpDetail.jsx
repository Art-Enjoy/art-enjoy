import { useLoaderData } from "react-router-dom";
import Location from '../assets/location.png';
import Price from '../assets/Price.png';
import './ExpDetail.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';

const ExpDetail = () => {
  const { product } = useLoaderData();

  return (
    <Container>
      <section className="general-container">
        <div id="div-exp" className="container-ads d-flex">
          <img className="img-fluid " id="img-add" src={product.img} alt="imagen" />
          <div className="ads p-2" id="container-text">

            <h1 className="title-add">{product.title}</h1>
            <div className="add-title">
              <h4><img src={Location} id="logo-location" />Ubicación:{product.location}</h4>
              <h5 className="description">Descripción:{product.description}</h5>
              <h3 className="price"><img src={Price} id="price1" />Precio por tikets:{product.price}</h3>
              <h4 className="units">Entradas disponibles: {product.units}</h4>
            </div>



          </div>
        </div>
      </section>
    </Container>
  );
};

export default ExpDetail;