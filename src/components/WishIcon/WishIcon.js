import { useEffect, useState } from "react";
import { useWishlistContext } from "../../context/WhislistContext";
import "./WishIcon.scss";
export const WishIcon = ({ id }) => {
  const { agregarWishlist, removerItemWishlist, isWishlist } =
    useWishlistContext();

  const [activo, setActivo] = useState();
  const handleAgregar = () => {
    isWishlist(id) === -1 ? agregarWishlist(id) : removerItemWishlist(id);
    if (isWishlist(id) === -1) {
      setActivo("in-wishlist");
    } else {
      setActivo();
    }
  };

  useEffect(() => {
    if (isWishlist(id) === -1) {
      setActivo();
    } else {
      setActivo("in-wishlist");
    }
  }, [id,isWishlist]);

  return (
    <div
      className={`mx-3 icon-wishlist ${activo}`}
      onClick={handleAgregar}
    ></div>
  );
};
