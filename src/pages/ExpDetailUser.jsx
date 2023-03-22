import { useLoaderData } from "react-router-dom";
import Location from '../assets/location.png';
import Price from '../assets/Price.png';
import './ExpDetail.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

const ExpDetailUser = () => {
  const { exp } = useLoaderData();

  return (
  <section className="general-container">
    <div id="div-exp" className="container-ads d-flex">
      <img className="img-fluid " id="img-add" src={exp.img} alt="imagen" />
      <div className="ads p-2" id="container-text">
      
        <h1 className="title-add">{exp.title}</h1>
        <div className="add-title">
          <h4><img src={Location} id="logo-location"/>Ubicación:{exp.location}</h4>
          <h5 className="description">Descripción:{exp.description}</h5>
          <h3 className="price"><img src={Price} id="price1"/>Precio por tikets:{exp.price}</h3>
         
          </div> 
          <Link to='/formsUser'>
                  <Button className="btn-buy"id="btn" >Comprar tikets</Button>
            </Link>
          
        
        
      </div>
    </div>
  </section>  
  );
};

export default ExpDetailUser;