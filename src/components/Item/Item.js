import "./Item.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const Item = ({ title, image, description, price, category, id, students }) => {
  return (
    <div className="col-3 my-3 d-flex itemListFlex">
      <Link to={`/detail/${id}`}>
        <img src={image} alt={title} className="mx-auto d-block img-fluid" />
      </Link>
      <Link to={`/detail/${id}`}>
        <h3 className="my-2">{title}</h3>
      </Link>
      <row>
        <div className="col">
          {" "}
          <FontAwesomeIcon icon={faTag} /> Categoría: {category}
        </div>
      </row>
      <p>
        Precio: <b>${price}</b> - Estudiantes: <b>{students}</b>
      </p>
      <row>
        <div className="col d-grid">
          <Link
            to={`/detail/${id}`}
            type="button"
            className="btn btn-primary my-3"
          >
            <FontAwesomeIcon icon={faCartShopping} className="mx-3" />
            Ver Detalles
          </Link>
        </div>
      </row>
    </div>
  );
};

export default Item;
