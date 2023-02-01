import "./ItemListContainer.scss";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  limit,
  startAfter,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { ItemFilter } from "../ItemFilter/ItemFilter";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const productosRef = collection(db, "productos");
  const q = categoryId
    ? query(productosRef, where("category", "==", categoryId))
    : query(productosRef, orderBy("price"), limit(8));

  const [lastVisible, setLastVisible] = useState(true);
  const [busqueda, setBusqueda] = useState(0);


  let precioMaximo = 0;
  let precioMinimo = 0;

  useEffect(() => {
    buscar();
    
   
  }, [busqueda]);

  useEffect(() => {
    setLoading(true);

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
        const lastVisible = resp.docs[resp.docs.length - 1];
        setLastVisible(lastVisible);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [ categoryId]);

  const fetchMore = () => {
    getDocs(
      query(productosRef, orderBy("price"), startAfter(lastVisible), limit(4))
    ).then((resp) => {
      setProductos(
        productos.concat(
          resp.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        )
      );
      const lastVisible = resp.docs[resp.docs.length - 1];
      setLastVisible(lastVisible);
    });
  };

  const buscar = () => {
    getDocs(
      query(
        productosRef,
        orderBy("price"),
        where("price", "<=", precioMaximo),
        where("price", ">=", precioMinimo)
      )
    ).then((resp) => {
     
      setProductos(
        resp.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
      
    });
  };

  precioMaximo = parseInt(busqueda.precioMaximo);
  precioMinimo = parseInt(busqueda.precioMinimo);

  const datosFiltro = (childdata) => {
    setBusqueda(childdata);
    
  };

  return (
    <div className={loading ? "vh-100" : ""}>
      {categoryId ? (
        <div></div>
      ) : (
        <ItemFilter /* productos={productos} */ datosFiltro={datosFiltro} />
      )}

      {loading ? (
        <div className="lds-dual-ring my-5">Cargando</div>
      ) : (
        <ItemList productos={productos} busqueda={busqueda} />
      )}

      <button
        onClick={fetchMore}
        disabled={
          categoryId || productosRef.length >= productos.length ? true : false
        }
      >
        fetch more
      </button>
    </div>
  );
};
