import { SiteNavbar } from "../components/SiteNavbar/SiteNavbar";
import { Container } from "../components/Container/Container";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Contacto } from "../components/Contacto/Contacto";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import { Footer } from "../components/Footer/Footer";
import Checkout from "../components/Checkout/Checkout";
import MyOrders from "../components/MyOrders/MyOrders";

const PrivateRoutes = () => {
  return (
    <>
      <SiteNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/productos/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ordenes" element={<MyOrders />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default PrivateRoutes;
