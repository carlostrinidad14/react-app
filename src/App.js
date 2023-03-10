import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { CartProvider } from "./context/CartContext";

import { LoginProvider } from "./context/LoginContext";
import { WishlistProvider } from "./context/WhislistContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <WishlistProvider>
          <AppRouter />
        </WishlistProvider>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
