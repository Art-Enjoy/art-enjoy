import { NavLink } from 'react-router-dom'
import "./NavbarAdmin.css"
import Logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cart from "../assets/tiket.jpg"




function NavbarUser() {
  return (

    <Navbar bg="light" expand="lg" className='navigation'>
      <Container className='menu'>
        <Navbar.Brand to="/">
          <NavLink to="/" className="navbar-home"><img src={Logo} alt="Art-Enjoy" className='Logo' /></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <NavLink to='/dashboardUser' className='text-navbar'>Experiencias</NavLink>

            <NavLink className='text-navbar' to="/signin" >Registrarte</NavLink>

            <NavLink className='text-navbar' to="/login" >Login </NavLink>
            <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>0</span>
        </div>
            


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}
export default NavbarUser;