import "./ItemDetail.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const ItemDetail = ({
  id,
  title,
  category,
  image,
  description,
  price,
  students,
}) => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
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
          <p>Estudiantes que cursaron: {students}</p>
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
      </div>
    </section>
  );
};
