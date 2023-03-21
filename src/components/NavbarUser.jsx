import { NavLink } from 'react-router-dom'
import "./NavbarUser.css"
import Logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavbarUser() {
return (

    <Navbar bg="light"  expand="lg" className='navigation'>
        <Container className='menu'>
        <Navbar.Brand to="/">
          <NavLink to="/"className="navbar-home"><img src={Logo} alt="Art-Enjoy"className='Logo'/></NavLink>
        </Navbar.Brand>  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">  
          <Nav className="">
            <NavLink  to='/dashboardUser' className='text-navbar' href="#home">Experiencias</NavLink>
                
            <NavLink className='text-navbar' to="/signin" href="#Post">Ingresar</NavLink>
                
            <NavLink className='text-navbar' to="/login" href="#form">Icono </NavLink>
                
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    
);
}
export default NavbarUser;