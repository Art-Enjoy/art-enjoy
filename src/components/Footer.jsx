import React from 'react'
import "./Footer.css"
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'




function Footer ()  {

  return (
    <Nav className='footer fixed-bottom'
     
    >
      <Nav.Item >
        <Link className='footer-text' to='/'>© Art&Enjoy 2023 Spain S.L.</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='footer-text' to='/cookiespolicy' href="#CookiesPolicy">P. privacidad y cookies</Link>
      </Nav.Item>
      <Nav.Item>
        <Link  className='footer-text' to='/contact' href="#Contact">Contacto</Link>
      </Nav.Item> 
      <Nav.Item>
        <Link  className='footer-text' to='/questions' href="#Questions">Preguntas frecuentes</Link>
      </Nav.Item>
  
       <Nav.Item>
        <Link className='footer-text' > <img src={facebook} alt="ArtEnjoy"className='socialmedia'/>       
        </Link>
      </Nav.Item> 
      <Nav.Item>
        <Link className='footer-text' > <img src={instagram} alt="ArtEnjoy"className='socialmedia'/>       
        </Link>
      </Nav.Item> 
      <Nav.Item>
        <Link className='footer-text' > <img src={twitter} alt="ArtEnjoy"className='socialmedia'/>       
        </Link>
      </Nav.Item> 
    </Nav>
  
 );
}
export default Footer;