import React from 'react'
import './HomeUser.css';
import image1 from '../assets/faro.jpg'
import image2 from '../assets/museo.jpg'
import image3 from '../assets/plz-españa.jpg'
import Slide from '../components/Slide'



const HomeUser = () => {
  return (
    <><><><h1 className="descover">¿Cual será tu próxima experiencia? Reserva tus tikets y descúbrelo!</h1>
      <Slide /></>
      <div className="titlee"><h1>Promociones</h1></div>
      <div className="container-promotions">
        <div className="container-cards">
          <div className="container-card-item">
            <div className="container-card-item-wrapper">
              <img src={image1} alt=""></img>
              <div className="container-info">
                <div className="info">
                  <p className="titulo">Faro de trafalgar</p>
                  <span className="categoria">Días laborables</span>
                </div>
                <div className="fondo"></div>
              </div>
            </div>
          </div>
          <div className="container-card-item">
            <div className="container-card-item-wrapper">
              <img src={image2} alt=""></img>
              <div className="container-info">
                <div className="info">
                  <p className="titulo">Museo Picaso Málaga</p>
                  <span className="categoria">Todos los domingos del mes</span>
                </div>
                <div className="fondo"></div>
              </div>
            </div>
          </div>
          <div className="container-card-item">
            <div className="container-card-item-wrapper">
              <img src={image3} alt=""></img>
              <div className="container-info">
                <div className="info">
                  <p className="titulo">Plaza España</p>
                  <span className="categoria">Todos los días</span>
                </div>
                <div className="titlee">Ubicaciones</div>
              </div>
            </div>
          </div>

        </div>

      </div></>
      <div className="titlee"><h1>Ubicaciones</h1></div></>


  
  )
}

export default HomeUser

