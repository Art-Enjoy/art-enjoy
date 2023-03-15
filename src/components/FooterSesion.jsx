import React from 'react'
import "./Footer.css"
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'



function Footer ()  {

  return (
    <Nav className='footer'
     
    >
      <Nav.Item >
        <Link className='footer-text' to='/'>© Art&Enjoy 2023 Spain S.L.</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='footer-text' to='/CookiesPolicy' href="#CookiesPolicy">Política de privacidad de las Cookies</Link>
      </Nav.Item>
      <Nav.Item>
        <Link  className='footer-text' to='/AboutUs' href="#AboutUs"> ¿Quienes somos?</Link>
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