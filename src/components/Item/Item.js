import "./Item.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext";

const Item = ({ title, image, description, price, category, id, stock }) => {
  const { agregarAlCarrito, isInCart } = useCartContext();

  const handleAgregar = () => {
    const item = {
      id,
      title,
      category,
      image,
      description,
      price,
      cantidad,
      stock,
    };

    agregarAlCarrito(item);
  };
  const cantidad = 1;
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
          <FontAwesomeIcon icon={faTag} /> Estilo:
          <Link to={`../productos/${category}`}> {category}</Link>
        </div>
        <div className="col" >$ {price}</div>
      </row>

      <row>
        <div className="col d-grid">
          <Link
            to={`/detail/${id}`}
            type="button"
            className="btn btn-primary my-3"
          >
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="mx-3" />
            Ver Detalles
          </Link>
          {!isInCart(id) ? (
            <button className="btn" onClick={handleAgregar}>
              <FontAwesomeIcon icon={faCartShopping} className="mx-3" />
              Agregar 1 Al carrito
            </button>
          ) : (
            <Link to="/cart" className="btn btn-success">
              Terminar mi compra / Ya tienes este curso en el carro
            </Link>
          )}
        </div>
      </row>
    </div>
  );
};

export default Item;
