import "./Cart.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const {
    cart,
    emptyCart,
    totalCart,
    removerItem,
    modificarCantidadMas,
    modificarCantidadMenos,
  } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2>Tu compra</h2>
      <div className="d-flex justify-content-between align-items-center p-2">
        <div className="fw-bold producto">Producto</div>
        <div className="fw-bold precio">Precio</div>
        <div className="fw-bold qty">Cantidad</div>
        <div className="ultimo"></div>
      </div>
      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center cartItems p-2 "
        >
          <div>
            <img
              src={item.image}
              alt={item.title}
              className="img-thumbnail"
              width={200}
            ></img>
          </div>
          <div>
            <h4>{item.title}</h4>
            <small>{item.category}</small>
          </div>
          <div>
            <p>${item.price * item.cantidad}</p>
          </div>
          <div>
            <button
              className="btn"
              onClick={() => modificarCantidadMenos(item.id)}
              disabled={item.cantidad === 1}
            >
              -
            </button>
            <span className="mx-3">{item.cantidad}</span>
            <button
              className="btn"
              onClick={() => modificarCantidadMas(item.id)}
              disabled={item.cantidad === item.stock}
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => removerItem(item.id)}
              className="btn btn-outline-danger"
            >
              eliminar
            </button>
          </div>
          <hr />
        </div>
      ))}

      <h4>Total: ${totalCart()}</h4>

      <button className="btn btn-danger" onClick={emptyCart}>
        Vaciar carrito
      </button>
      <Link className="btn btn-success mx-2" to="/checkout">
        Terminar mi compra
      </Link>
    </div>
  );
};

export default Cart;
