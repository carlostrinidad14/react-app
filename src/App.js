import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import { LoginProvider, useLoginContext } from "./context/LoginContext";
import { WishlistProvider } from "./context/WhislistContext";
import AppRouter from "./router/AppRouter";
import PrivateRoutes from "./router/PrivateRoutes";
import PublicRoutes from "./router/PublicRoutes";

function App() {
  /* const { user } = useLoginContext(); */
  return (
    <BrowserRouter>
      <LoginProvider>
        <CartProvider>
          <WishlistProvider>
          {/*   {user.logged ?  */}<PrivateRoutes /> {/* : */} <PublicRoutes />{/* } */}
          </WishlistProvider>
        </CartProvider>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
