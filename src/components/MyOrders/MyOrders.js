import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../context/LoginContext";
import { db } from "../../firebase/config";
import "./MyOrders.scss";

const MyOrders = () => {
  const { user } = useLoginContext();
  const [ordenes, setOrdenes] = useState([]);
  const [ordenId, setOrdenId] = useState("ordenDefecto");
  const [ordenData, setOrdenData] = useState(null);

  const ordersRef = collection(db, "orders");
  const q = query(ordersRef, where("cliente.email", "==", user.email));

  const handleOrden = (e) => {
    setOrdenId(e.target.id);
  };

  useEffect(() => {
    getDoc(doc(db, "orders", ordenId))
      .then((resp) => {
        console.log(ordenId);
        console.log(resp.data());
        setOrdenData(resp.data().items);
      })

      .finally(() => {});
  }, [ordenId]);

  useEffect(() => {}, [ordenData]);

  useEffect(() => {
    getDocs(q)
      .then((resp) => {
        setOrdenes(
          resp.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      })
      .finally(() => {});
  }, [q]);

  return (
    <div className="container my-4 ">
      <h1>Mis ordenes</h1>
      <div className="d-flex">
        {ordenes.map((item) => (
          <div className="p-3 m-3 shadow bradius ">
            <div className="my-2">
              Orden de compra{" "}
              <div>
                <span onClick={handleOrden} id={item.id} className="linkOrden">
                  {item.id}
                </span>
              </div>
            </div>
            <div className="my-2">Total de la compra ${item.total} </div>
            <div className="my-2">Estado: {item.estado}</div>
          </div>
        ))}
      </div>
      <hr></hr>
      <h3>Detalle de la orden:</h3>
      {ordenData ? (
        ordenData.map((item) => (
          <div className="d-flex align-items-center justify-content-center ">
            <div className="col-3">
              <img
                src={item.image}
                alt={item.title}
                className="img-thumbnail"
                width={200}
              ></img>
            </div>
            <div className="col-3">
              <div className="fw-bold fs-5">{item.title}</div>
              <div className="fw-bold fs-6">Estilo: {item.category}</div>
            </div>
            <div className="col-3">
              <div>Precio: {item.price}</div>
              <div>Cantidad: {item.cantidad}</div>
            </div>
          </div>
        ))
      ) : (
        <div className="orderDetail">Seleccione ID en el listado de arriba para mostrar detalle</div>
      )}
    </div>
  );
};

export default MyOrders;
