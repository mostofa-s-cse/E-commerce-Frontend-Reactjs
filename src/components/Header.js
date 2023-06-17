import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  let user = JSON.parse(localStorage.getItem("user-info"));
  // console.log(user)
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">E-comm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar_warapper">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/productList">All Products</Link>
                <Link to="/add">Add Product</Link>
                {/* <Link to="/update">Update Product</Link> */}
                <Link to="/search">Search Product</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
              </>
            )}
          </Nav>
          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={user && user.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" onClick={logOut}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <></>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
