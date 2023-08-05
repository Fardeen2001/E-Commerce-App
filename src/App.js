import { CartProvider } from "react-use-cart";
import { useState } from "react";
import CartPortal from "./Components/Cart/CartPortal";
import About from "./Components/Layout/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import STORE from "./Components/Layout/Store/Store";
import Home from "./Components/Layout/Home/Home";
import NavBar from "./Components/Header/Navbar";
import Contact from "./Components/Layout/Contact/Contact";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  const [cart, Setcart] = useState(false);

  const showCartHandler = () => {
    Setcart(true);
  };
  const hideCartHandler = () => {
    Setcart(false);
  };
  const addContactHandler = async (contactData) => {
    const response = await fetch(
      "https://e-commerce-11a6c-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",
      {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = response.json();
    console.log(data);
  };
  return (
    <CartProvider>
      <Router>
        {cart && <CartPortal onHide={hideCartHandler} />}
        <NavBar onShow={showCartHandler} />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/ProductDetails/:productId"
              element={<ProductDetails />}
            />

            <Route
              exact
              path="/Store"
              element={<STORE onShow={showCartHandler} />}
            />
            <Route exact path="/About" element={<About />} />
            <Route
              exact
              path="/Contact"
              element={<Contact onAddContact={addContactHandler} />}
            />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
