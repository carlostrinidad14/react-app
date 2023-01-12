import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "./components/Container/Container";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { SiteNavbar } from "./components/SiteNavbar/SiteNavbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./Footer/Footer";
import { Contacto } from "./components/Contacto/Contacto";
import { AboutUs } from "./components/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
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
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
