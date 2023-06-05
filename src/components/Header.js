import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function Header()
{
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">E-comm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar_warapper">
          <Link to="/add">Add Product</Link>
            <Link to="/update">Update Product</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;