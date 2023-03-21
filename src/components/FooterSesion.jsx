import React from 'react'
import "./FooterSesion.css"
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'




function FooterSesion ()  {

  return (
    <Nav className='footersesion fixed-bottom'
     
    >
      <Nav.Item >
        <Link className='footersesion-text' to='/'>© Art&Enjoy 2023 Spain S.L.</Link>
      </Nav.Item> 
    </Nav>
  
 );
}
export default FooterSesion;