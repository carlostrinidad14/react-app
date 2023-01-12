import "./SiteNavbar.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const SiteNavbar = () => {
  return (
    <header className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">LOGO</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/">Inicio</Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="/about-us">Sobre Nosotros</Link>
              </Nav.Link>
              <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  {" "}
                  <Link to="/productos/Diseño">Diseño</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/productos/Fotografía">Fotografía</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/productos/Tipografía">Tipografía</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/productos/Marketing">Marketing</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/productos/Programación">Programación</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/">Todas las Categorías</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/contacto">Contacto</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
            <CartWidget qty="0" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
