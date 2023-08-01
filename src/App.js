import { CartProvider } from "react-use-cart";
import Home from "./Components/Layout/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Layout/Footer";
import { useState } from "react";
import CartPortal from "./Components/Cart/CartPortal";

function App() {
  const [cart, Setcart] = useState(false);
  const showCartHandler = () => {
    Setcart(true);
  };
  const hideCartHandler = () => {
    Setcart(false);
  };
  return (
    <CartProvider>
      {cart && <CartPortal onHide={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Home onShow={showCartHandler} />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
