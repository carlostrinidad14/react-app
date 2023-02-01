import "./ItemList.scss";

import Item from "../Item/Item";


export const ItemList = ({ productos, busqueda }) => {
  return (
    <div className="container my-4 ">
      <h2>Catalogo de Cervezas</h2>
      <hr />
      <div className="row">
       
        <section className="row my-4 ">
          {productos.map((prod) => (
            <Item key={prod.id} {...prod} />
          ))}

          {/*   {busqueda
            ? 
            : busqueda.map((prod) => <Item key={prod.id} {...prod} />)} */}
        </section>
        <hr />
        <section>
          <br />
        </section>
      </div>
    </div>
  );
};
