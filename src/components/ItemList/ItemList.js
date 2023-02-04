import "./ItemList.scss";

import Item from "../Item/Item";

export const ItemList = ({ productos, busqueda }) => {
  return (
    <div className=" my-4 col-10">
      <h2>Catalogo de Cervezas</h2>

      <div className="row">
        <section className="row my-4 d-flex flex-lg-wrap justify-content-around">
          {productos.map((prod) => (
            <Item key={prod.id} {...prod} />
          ))}
        </section>
        <section></section>
      </div>
    </div>
  );
};
