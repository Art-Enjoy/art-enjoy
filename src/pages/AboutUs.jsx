import React from 'react'
import './AboutUs.css'
import { Link, NavLink } from 'react-router-dom'


const AboutUs = () => {
    

    return (
        <div className='text-container-about'>
                <h2 id="title-about">Art&Enjoy</h2>
            <p className='text-about'>Art&Enjoy es una plataforma de divulgación y promoción de contenidos culturales que combina agenda cultural con marketplace de venta de entradas para espectáculos. Además Art&Enjoy tiene una versión en formato papel, una revista de 20 páginas que se edita mensualmente y se distribuye en más de 600 puntos de Andalucía, actualmente en las ciudades de Sevilla, Cádiz, Granada y Málaga.
            </p>
                <h2>¿Qué objetivos tiene Art&Enjoy?</h2>
                <ul >
        <li className="text-about">1. Promover y facilitar el acceso a la cultura y la fidelización de su público.
        </li>
        <li className="text-about">2. Incentivar hábitos de consumo cultural.
        </li>
        <li className="text-about">3. Favorecer la difusión de la oferta cultural andaluza y nacional.
        </li>
        <li className="text-about">4. Impulsar la producción cultural y apoyar al sector creativo-cultural.
        </li>
        <li className="text-about">5. Fomentar la creación de una comunidad de personas con motivaciones culturales.
        </li>
        <li className="text-about">6. Convertirse entre el nexo de unión permanente entre el público y los agentes culturales y artísticos.
        </li>
                </ul>
        </div>
    );
};
export default AboutUs;