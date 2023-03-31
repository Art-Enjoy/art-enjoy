
import img1 from '../assets/img.cadiz.jpg'
import "./Location.css"
import img2 from '../assets/img.sevilla.jpg'
import img3 from '../assets/img.malaga.jpg'
import img4 from '../assets/img.granada.jpg'
import Container from 'react-bootstrap/Container';


import React from 'react'

const Location = () => {
    return (
        <><Container>
        <><div className="title-cards">
            <h1>Ubicaciones</h1>
        </div><div className="container-card">

                <div className="card">
                    <figure>
                        <img src={img1}></img>
                        </figure>
                    <div className="contenido-card">
                        <h3>Cádiz</h3>
                        <p>Conocida popularmente como la “Tacita de Plata”.Es uno de los núcleos económicos más activos de Andalucía por su comercio, su zona portuaria y su turismo de sol y playa.</p>
                        <a href="#">Actividades</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src={img2}></img>
                        </figure>
                    <div className="contenido-card">
                        <h3>Sevilla</h3>
                        <p>Ubicada al sur de España, la impactante ciudad de Sevilla es sin duda alguna centro cultural del país ibérico, contando con una riqueza histórica increíble.</p>
                        <a href="#">Actividades</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src={img3}></img>
                        </figure>
                    <div className="contenido-card">
                        <h3>Málaga</h3>
                        <p>Málaga es, de por sí, una hermosa ciudad que rebosa belleza.Disfruta de su mar,sus playas,miradores como el de Gibralfaro, sus parques o su paseo marítimo entre otros.</p>
                        <a href="#">Actividades</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src={img4}></img>
                        </figure>
                    <div className="contenido-card">
                        <h3>Granada</h3>
                        <p>Además de la mundialmente conocida Alhambra y el barrio del Albaicín, Granada cuenta con una catedral renacentista (siglo XVI). Muchos otros monumentos salpican la ciudad en cada uno de sus rincones.</p>
                        <a href="#">Actividades</a>
                    </div>
                </div>
            </div></>
            </Container></>
    )
}

export default Location
