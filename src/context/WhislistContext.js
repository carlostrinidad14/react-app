import { createContext, useContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const useWishlistContext = () => {
  return useContext(WishlistContext);
};

const init = JSON.parse(localStorage.getItem("wishlist")) || [];

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(init);
  console.log(wishlist);

  const agregarWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  const removerItemWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item !== id));
  };

  const isWishlist = (id) => {
    return wishlist.indexOf(id);
  };

  const emptyWishlist = () => {
    setWishlist([]);
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        agregarWishlist,
        removerItemWishlist,
        isWishlist,
        emptyWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
