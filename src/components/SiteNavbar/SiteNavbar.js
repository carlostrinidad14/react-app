import "./SiteNavbar.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";

export const SiteNavbar = () => {
  const { user, logout } = useLoginContext();
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
                <Link to="/">Inicio</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about-us">Sobre Nosotros</Link>
              </Nav.Link>
              <NavDropdown title="Estilos" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/productos/Neipa">NEIPA</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/productos/Ipa">IPA</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/productos/Witbier">Witbier</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/productos/Saison">Saison</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/productos/Dubbel">Dubbel</Link>
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
            <Link to="/cart">
              <CartWidget />
            </Link>
            <div className="header__container">
              <p>Bienvenido: {user.email}</p>
              <Link to="/ordenes">Mis Ordenes</Link>
              <button className="btn btn-danger" onClick={logout}>
                Logout
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
