import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            LOGO
          </a>
          <p className="text-muted">© 2022</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5>Categorías</h5>
          <ul className="nav flex-column">
            <li>
              <Link to="/productos/Diseño">Diseño</Link>
            </li>
            <li>
              <Link to="/productos/Fotografía">Fotografía</Link>
            </li>
            <li>
              <Link to="/productos/Tipografía">Tipografía</Link>
            </li>
            <li>
              <Link to="/productos/Marketing">Marketing</Link>
            </li>
            <li>
              <Link to="/productos/Programación">Programación</Link>
            </li>
            <hr />
            <li>
              <Link to="/">Todas las Categorías</Link>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column"></ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column"></ul>
        </div>
      </footer>
    </div>
  );
};
