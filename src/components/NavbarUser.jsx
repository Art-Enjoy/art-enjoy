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
            <NavLink  to='/' className='text-navbar' href="#home">Todas nuestras experiencias</NavLink>
                
            <NavLink className='text-navbar' to="/form" href="#Post">Buscar</NavLink>
                
            <NavLink className='text-navbar' to="/advertisement" href="#form">¿Qué es Art&enjoy? </NavLink>
                
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    
);
}
export default NavbarUser;