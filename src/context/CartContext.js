import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

const init = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(init);
  console.log(cart);

  const agregarAlCarrito = (item) => {
    setCart([...cart, item]);
  };

  const removerItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.price*item.cantidad, 0);
  };

  const totalCantidad = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const modificarCantidadMas = (id) => {
    let prueba = cart.find((item) => item.id === id);
    prueba.cantidad += 1;
    setCart([...cart]);
  };
  const modificarCantidadMenos = (id) => {
    let prueba = cart.find((item) => item.id === id);
    prueba.cantidad -= 1;
    setCart([...cart]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        removerItem,
        isInCart,
        emptyCart,
        totalCart,
        totalCantidad,
        modificarCantidadMas,
        modificarCantidadMenos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
