import React from 'react'
import Location from '../assets/location.png';
import Price from '../assets/Price.png';
import tar1 from '../assets/faro.jpg'
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";

const PromotionTarifa = () => {
    return (
        <section className="general-container">
            <div id="div-exp" className="container-ads d-flex">
                <img className="img-fluid " id="img-add" src={tar1} alt="imagen" />
                <div className="ads p-2" id="container-text">

                    <h1 className="title-add"></h1>
                    <div className="add-title">
                        <h4><img src={Location} id="logo-location" />Ubicación:Faro de trafalgar.Cádiz</h4>
                        <h5 className="description">
                            
                            Cádiz al tratarse de una provincia con numerosos kilómetros de costa y con una larguísima historia, está repleta de faros.
                            Son atractivos turísticos vinculados, la mayoría, a la aventura y los piratas. Destacando entre ellos el Faro de trafalgar.Se alza sobre el Tómbolo de Trafalgar, patrimonio geológico andaluz y testigo privilegiado de algunas de las páginas más importantes y trágicas de la historia de España.
                            En la visita disfrutaremos de la puesta de sol mientras  el guía nos narra la historia del faro.</h5>
                            <a className="incluid"> En esta visita se incluye guía de habla española  e inglesa.
                            La duración de la actividad es de 2 horas.</a>
                        <h3 className="price"><img src={Price} id="price1" />A mitad de precio, sólo 5 euros!</h3>
                        <Link to='/formsUser'>
                            <Button className="btn-buy" id="btn" >Comprar tikets</Button>
                        </Link>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default PromotionTarifa