import React from 'react'
import Location from '../assets/location.png';
import Price from '../assets/Price.png';
import esp1 from '../assets/plzespaña.jpg'
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';

const PromotionEsp = () => {
   
    return (
        <Container>
        <section className="general-container">
            <div id="div-exp" className="container-ads d-flex">
                <img className="img-fluid " id="img-add" src={esp1} alt="imagen" />
                <div className="ads p-2" id="container-text">

                    <h1 className="title-add"></h1>
                    <div className="add-title">
                        <h4><img src={Location} id="logo-location" />Ubicación:Sevilla</h4>
                        <h5 className="description">Descripción: Visita guiada a La Plaza de España.
                            
                            La visita la comenzamos por el interior de la plaza, que está bordeada por un canal navegable atravesado por 4 puentes. El centro de esta amplia plaza se decora con una fuente, que es un oasis de frescor en los cálidos días verano.</h5>
                            <a className="incluid">En esta visita se incluye guía de habla española  e inglesa.
                            La duración de la actividad es de 2 horas. .</a>
                        <h3 className="price"><img src={Price} id="price1" />Freetour!!</h3>
                       
                    </div>



                </div>
            </div>
        </section>
        </Container> 
    )
}

export default PromotionEsp