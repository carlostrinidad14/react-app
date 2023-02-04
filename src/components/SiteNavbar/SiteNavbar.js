import "./SiteNavbar.scss";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";
import { auth } from "../../firebase/config";

export const SiteNavbar = () => {
  const { logout } = useLoginContext();
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
            <div className="headerRight">
              <div className="px-3">
                <h5>Bienvenido: {auth.currentUser.displayName}</h5>
                <Link to="/ordenes">Mis Ordenes</Link>
              </div>
              <div className="px-3">
                {" "}
                <Link to="/cart">
                  <CartWidget />
                </Link>
              </div>
              <div className="px-3">
                <button className="btn btn-danger" onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
