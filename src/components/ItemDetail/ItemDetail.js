import "./ItemDetail.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { WishIcon } from "../WishIcon/WishIcon";

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
      {title ? (
        <div>
          <div className="row">
            <div className="col-sm">
              <img alt={title} src={image} className="w-100" />
            </div>
            <div className="col-sm">
              <div className="d-flex align-items-center ">
                <h2>{title} </h2>
                <WishIcon id={id} />
              </div>
              <small>{description}</small>
              <br />
              <div className="d-flex align-items-center justify-content-between">
                {" "}
                <p className="fs4 fw-bold my-3">
                  Categoría:{" "}
                  <Link to={`../productos/${category}`}> {category}</Link>
                </p>
                <h3>
                  Precio: $<b>{price}</b>
                </h3>
              </div>
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
        </div>
      ) : (
        <h1 className="text-center text-danger vh-100">
          No Existe el Producto
        </h1>
      )}
    </section>
  );
};
