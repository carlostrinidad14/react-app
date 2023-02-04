import "./CartWidget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalCantidad } = useCartContext();

  return (
    <div className="d-flex align-items-center">
      <FontAwesomeIcon icon={faCartShopping} className="mx-3" color="white" />
      <div className="qtyCart">{totalCantidad()}</div>
    </div>
  );
};
