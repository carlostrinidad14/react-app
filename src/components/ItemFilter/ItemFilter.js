import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export const ItemFilter = ({ productos, datosFiltro }) => {
  const [precioMinimo, setPrecioMinimo] = useState(0);
  const [precioMaximo, setPrecioMaximo] = useState(200);
  const [filtrado, setFiltrado] = useState(true);
 

  let location = useLocation();

  const handlePrecioMinimo = (e) => {
    setPrecioMinimo(e.target.value);
  };
  const handlePrecioMaximo = (e) => {
    setPrecioMaximo(e.target.value);
  };

  const buscar = (value1, value2) => {
  /*   setBusqueda(
      productos.filter(
        (producto) => producto.price >= value1 && producto.price <= value2
      )
    );

    setFiltrado(false); */
  };

  

  useEffect(() => {}, [filtrado]);

  useEffect(() => {
    setFiltrado(true);
  }, [location]);

  return (
    <div className="col-2 my-4">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          datosFiltro({precioMaximo: precioMaximo, precioMinimo: precioMinimo})
        }}
      >
        <Form.Group>
          <Col xs="6">
            <p>Precio Mínimo {precioMinimo}</p>
            <Form.Range
              value={precioMinimo}
              onChange={handlePrecioMinimo}
              min={0}
              max={300}
            />
          </Col>
          <Col xs="6">
            <p>Precio Máximo {precioMaximo}</p>
            <Form.Range
              value={precioMaximo}
              onChange={handlePrecioMaximo}
              min={0}
              max={300}
            />
          </Col>
        </Form.Group>
        <button
          onClick={() => buscar(precioMinimo, precioMaximo)}
          className="btn mx-2"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-3" />
          Buscar
        </button>
      </Form>
    </div>
  );
};
