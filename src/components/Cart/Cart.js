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
      <hr />

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>

          <p>Precio: ${item.price*item.cantidad}</p>
          <p>Cantidad:</p>
          <button
            onClick={() => modificarCantidadMenos(item.id)}
            disabled={item.cantidad === 1}
          >
            -
          </button>

          <span className="mx-3">{item.cantidad}</span>

          <button
            onClick={() => modificarCantidadMas(item.id)}
            disabled={item.cantidad === item.stock}
          >
            +
          </button>
          <button
            onClick={() => removerItem(item.id)}
            className="btn btn-outline-danger"
          >
            eliminar
          </button>
          <hr />
        </div>
      ))}

      <h4>Total: ${totalCart()}</h4>

      <button className="btn btn-danger" onClick={emptyCart}>
        Vaciar carrito
      </button>
      <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
    </div>
  );
};

export default Cart;
