import "./SiteNavbar.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "../CartWidget/CartWidget";

export const SiteNavbar = () => {
  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Inicio</Nav.Link>
              <Nav.Link href="#action2">Quienes Somos?</Nav.Link>
              <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Categoría 1</NavDropdown.Item>
                <NavDropdown.Item href="#action6">Categoría 2</NavDropdown.Item>
                <NavDropdown.Item href="#action7">Categoría 3</NavDropdown.Item>
                <NavDropdown.Item href="#action8">Categoría 4</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action9">
                  Todas las Categorías
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action10">Contacto</Nav.Link>
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
