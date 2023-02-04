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

const MyOrders = () => {
  const { user } = useLoginContext();
  const [ordenes, setOrdenes] = useState([]);
  const [ordenId, setOrdenId] = useState("ordenDefecto");
  const [ordenData, setOrdenData] = useState(null);

  const ordersRef = collection(db, "orders");
  const q = query(ordersRef, where("cliente.email", "==", user.email));
  const docRef = doc(db, "orders", ordenId);

  const handleOrden = (e) => {
    /* console.log(e.target.id); */
    setOrdenId(e.target.id);
  };

  useEffect(() => {
    getDoc(docRef)
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
      {ordenes.map((item) => (
        <div>
          <p>
            Orden de compra:{" "}
            <span onClick={handleOrden} id={item.id}>
              {item.id}
            </span>{" "}
            - Total de la compra ${item.total} - Estado: {item.estado}
          </p>
          {/* <p>Nombre {item.cliente.nombre}</p> */}
        </div>
      ))}

      {ordenData ? (
        ordenData.map((item) => (
          <div>
            <img src={item.image} alt={item.title}></img>
            <p>Item:{item.title}</p>
            <p>precio:{item.price}</p>
            <p>Cantidad:{item.cantidad}</p>
            <p>Estilo-:{item.category}</p>
          </div>
        ))
      ) : (
        <p>Seleccione Id para mostrar detalle</p>
      )}
    </div>
  );
};

export default MyOrders;
