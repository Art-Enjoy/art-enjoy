import { NavLink } from 'react-router-dom'
import "./NavbarAdmin.css"
import Logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavbarAdmin() {
return (

    <Navbar bg="light"  expand="lg" className='navigation'>
        <Container className='menu'>
        <Navbar.Brand to="/">
          <NavLink to="/"className="navbar-home"><img src={Logo} alt="Art-Enjoy"className='Logo'/></NavLink>
        </Navbar.Brand>  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">  
          <Nav className="">
            <NavLink  to='/dashboardAdmin' className='text-navbar' href="#home">Tus experiencias</NavLink>
                
            <NavLink className='text-navbar' to="/form" href="#exp">Bienvenid@</NavLink>
                
            <NavLink className='text-navbar' to='/addexpadmin' href="#form">Añadir actividad </NavLink>
            
                
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    
);
}
export default NavbarAdmin;