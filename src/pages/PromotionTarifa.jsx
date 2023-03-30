import React from 'react'

import Price from '../assets/Price.png';
import tar1 from '../assets/faro.jpg'
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";

const PromotionTarifa = () => {
    return (
        <section className="general-container">
            <div id="div-exp" className="container-ads d-flex">

                <div className="col-6 add-title">
                    <img className="img-fluid " id="img-add" src={tar1} alt="imagen" />
                </div>
                
                <div className="col-6 ads p-2" id="container-text">
                <div className="ubication" > <h4>Ubicación:Faro de trafalgar.Cádiz</h4> </div>
                <div className="description"> <h5>

                    Cádiz al tratarse de una provincia con numerosos kilómetros de costa y con una larguísima historia, está repleta de faros.
                    Son atractivos turísticos vinculados, la mayoría, a la aventura y los piratas. Destacando entre ellos el Faro de trafalgar.Se alza sobre el Tómbolo de Trafalgar, patrimonio geológico andaluz y testigo privilegiado de algunas de las páginas más importantes y trágicas de la historia de España.
                    En la visita disfrutaremos de la puesta de sol mientras  el guía nos narra la historia del faro.</h5>
                    <a className="incluid"> En esta visita se incluye guía de habla española  e inglesa.
                        La duración de la actividad es de 2 horas.</a>

                    <h3 className="price">A mitad de precio, sólo 5 euros!</h3>

                </div>

                </div>
            </div>
        </section>
    )
}

export default PromotionTarifa