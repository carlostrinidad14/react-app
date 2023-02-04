import "./Item.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext";
import { WishIcon } from "../WishIcon/WishIcon";

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
    <div className="col-3 mx-2 py-3 my-2 itemProducto">
      <Link to={`/detail/${id}`}>
        <img src={image} alt={title} className="mx-auto d-block img-fluid" />
      </Link>
      <div className="d-flex align-items-center justify-content-between">
        <Link to={`/detail/${id}`}>
          <h3 className="my-2 text-center">{title}</h3>
        </Link>
        <WishIcon id={id} />
      </div>
      <row>
        <div className="col d-flex flex-wrap justify-content-around">
          <div>
            <FontAwesomeIcon icon={faTag} /> Estilo:
            <Link to={`../productos/${category}`}> {category}</Link>
          </div>
          <div className="fw-bold">$ {price}</div>
        </div>
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
              Agregar Al carrito
            </button>
          ) : (
            <Link to="/cart" className="btn btn-success">
              Ver carrito
            </Link>
          )}
        </div>
      </row>
    </div>
  );
};

export default Item;
