import "./ItemDetail.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

export const ItemDetail = ({
  id,
  title,
  category,
  image,
  description,
  price,
  stock,
}) => {
  const { agregarAlCarrito, isInCart } = useCartContext();

  const [cantidad, setCantidad] = useState(1);

  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };

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

  return (
    <section className="itemDetail">
      <div className="row">
        <div className="col-sm">
          <img alt={title} src={image} className="w-100" />
        </div>
        <div className="col-sm">
          <h2>{title}</h2>
          <small>{description}</small>
          <br />
          <small>
            Categoría: <Link to={`../productos/${category}`}> {category}</Link>
          </small>

          <h3>
            Precio: $<b>{price}</b>
          </h3>
        </div>
      </div>

      <div className="row my-5">
        <button className="btn" onClick={handleVolver}>
          <FontAwesomeIcon icon={faArrowLeft} className="mx-3" />
          Volver
        </button>

        {!isInCart(id) ? (
          <ItemCount
            cantidad={cantidad}
            setCantidad={setCantidad}
            max={stock}
            onAdd={handleAgregar}
          />
        ) : (
          <Link to="/cart" className="btn btn-success">
            Terminar mi compra / Ya tienes este curso en el carro
          </Link>
        )}
      </div>
    </section>
  );
};
