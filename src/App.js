import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreens from "./screens/LoginScreens";
import RegisterScreens from "./screens/RegisterScreens";
import ProfileScreens from "./screens/ProfileScreens";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreens from "./screens/PaymentScreens";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/login" component={LoginScreens} />
          <Route path="/register" component={RegisterScreens} />
          <Route path="/profile" component={ProfileScreens} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreens} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
