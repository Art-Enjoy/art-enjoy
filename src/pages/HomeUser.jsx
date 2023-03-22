import React from 'react'
import './HomeUser.css';
import image1 from '../assets/faro.jpg'
import image2 from '../assets/museo.jpg'
import image3 from '../assets/plzespaña.jpg'
import Slide from '../components/Slide'
import Location from '../components/Location'
import { Link } from 'react-router-dom'




const HomeUser = () => {
  return (
    <><><h1 className="descover">¿Cual será tu próxima experiencia? Reserva tus tikets y descúbrelo!</h1>
      <Slide />
      <><div className="titlee"><h1>Promociones</h1></div><div className="container-promotions">
        <div className="container-cards">
          <div className="container-card-item">
            <div className="container-card-item-wrapper">
            <Link  to= '/trafalgar-cadiz'><img src={image1} alt=""></img></Link>
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
            <Link  to= '/picasso-malaga'><img src={image2} alt=""></img></Link>
              <div className="container-info">
                <div className="info">
                  <p className="titulo">Museo Picaso Málaga</p>
                  <span className="categoria">Todos los domingos del mes de abril</span>
                </div>
                <div className="fondo"></div>
              </div>
            </div>
          </div>
          <div className="container-card-item">
            <div className="container-card-item-wrapper">
              
              <Link  to= '/plazaespaña-sevilla'><img src={image3} alt=""></img></Link>
              <div className="container-info">
                <div className="info">
                  <p className="titulo">Plaza España</p>
                  <span className="categoria">Todos los días de junio a septiembre</span>
                </div>
                <div className="fondo"></div>

              </div>
            </div>
          </div>

        </div>

      </div></>
      </><Location /></>


  
  )
}

export default HomeUser

