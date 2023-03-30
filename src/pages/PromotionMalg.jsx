import React from 'react'
import Location from '../assets/location.png';
import Price from '../assets/Price.png';
import mal1 from '../assets/museo.jpg'
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";

const PromotionMalg = () => {
    return (
        <section className="general-container">
            <div id="div-exp" className="container-ads d-flex">
                <img className="img-fluid " id="img-add" src={mal1} alt="imagen" />
                <div className="ads p-2" id="container-text">

                    <h1 className="title-add"></h1>
                    
                        <h4><img src={Location} id="logo-location" />Ubicación:Málaga</h4>
                        <h5 className="description">
                            La colección dedicada en su totalidad a la obra de Picasso comprende más de 230 obras de arte entre pinturas, esculturas, dibujos, obra gráfica y cerámicas que muestran las innovaciones revolucionarias de su trayectoria.</h5>
                           <a className="incluid"> En esta visita se incluye guía de habla española especializada en la obra de Picasso.
                            La duracion de la actividad es de una hora y media.</a>
                        <h3 className="price"><img src={Price} id="price1" />Dos tikets al precio de uno,por sólo 9,50!!</h3>
                       
                    



                </div>
            </div>
        </section>
    )
}

export default PromotionMalg