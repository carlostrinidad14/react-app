import "./CartWidget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = (props) => {
  return (
    <div className="d-flex align-items-center">
      <FontAwesomeIcon icon={faCartShopping} className="mx-3" />
      <div>{props.qty}</div>
    </div>
  );
};
