import { CartProvider } from "react-use-cart";
import Header from "./Components/Header/Header";
import Footer from "./Components/Layout/Footer";
import { useState } from "react";
import CartPortal from "./Components/Cart/CartPortal";
import About from "./Components/Layout/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import STORE from "./Components/Layout/Store/Store";

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
      <Router>
        {cart && <CartPortal onHide={hideCartHandler} />}
        <Header onShow={showCartHandler} />
        <main>
          <Routes>
            <Route
              exact
              path="/Store"
              element={<STORE onShow={showCartHandler} />}
            />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
