import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../context/LoginContext";
import { auth, db } from "../../firebase/config";

const MyOrders = () => {
  const { user } = useLoginContext();
  const [ordenes, setOrdenes] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const ordersRef = collection(db, "orders");
  const q = query(ordersRef, where("cliente.email", "==", user.email));

/*   useEffect(() => {
    setLoading(true);

    getDocs(q)
      .then((resp) => {
        setOrdenes(
          resp.docs.map((doc) => {
        const aaa= doc.data();
        console.log("esto es aaa",aaa);
            return {
              ...doc.data(),
              id: doc.id,
             };
          })
        );
        
      })
      .finally(() => {
        setLoading(false);
        console.log(ordenes);
        
      });
  }, []); */



  useEffect(() => {
    setLoading(true);

    getDocs(q)
      .then((resp) => {
        setItems(
            resp.docs.map((doc) => {
          
              return {
                ...doc.data().items,
                               };
            })
          );
        setOrdenes(
          resp.docs.map((doc) => {
              return {
              ...doc.data(),
              id: doc.id,
             };
          })
        );
        
      })
      .finally(() => {
        setLoading(false);
        console.log("items",items);
        /* console.log("items",items[0][0].title); */
        /* console.log("items",items[2][2].title); */
      });
  }, []);



  return (
    <div className="container my-4 ">
      <h1>Mis ordenes</h1>
      {ordenes.map((item) => (
        <div>
          <p>Id de la compra {item.id}</p>
          {/* <p>Nombre {item.cliente.nombre}</p> */}
          
        </div>
      ))}
      
     
      


      
    </div>
  );
};

export default MyOrders;
