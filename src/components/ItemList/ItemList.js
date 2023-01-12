import "./ItemList.scss";
import { useEffect, useState } from "react";
import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

export const ItemList = ({ productos }) => {
  const [verMas, setVerMas] = useState(12);

  const sumar = () => {
    if (verMas < productos.length) {
      setVerMas(verMas + 4);
    }
  };

  const restar = () => {
    if (verMas > 12) {
      setVerMas(verMas - 4);
    }
  };

  useEffect(() => {}, [verMas]);

  return (
    <div className="container my-4">
      <h2>Catalogo de Cursos</h2>
      <hr />

      <section className="row my-4">
        {productos.slice(0, verMas).map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </section>
      <hr/>
      <section className="float-end">
        <button onClick={sumar} className="btn mx-2">
        <FontAwesomeIcon icon={faAngleDown} className="mx-3" />
          Ver Mas
        </button>
        <button onClick={restar} className="btn mx-2">
        <FontAwesomeIcon icon={faAngleUp} className="mx-3" />
          Ver Menos
        </button>
      </section>
      <section><br/></section>
    </div>
  );
};
