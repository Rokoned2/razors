import React, { Suspense } from "react";
import "./sass/main.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
// import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductSearch from "./pages/ProductSearch";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import Cart from "./pages/Cart/Cart";
import Upload from "./pages/UploadProduct/UploadProduct";
import {
  AuthCheck,
  // StorageImage,
  useAuth,
  // useSigninCheck,
} from "reactfire";

function App() {
  const AuthScreens = () => (
    <>
      <Route path="/registrarse" exact component={Register} />
      <Route path="/ingresar" exact component={Login} />
    </>
  );

  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/productos" exact component={ProductSearch} />
            <Route path="/productos/:id" exact component={ProductDetails} />
            <Route path="/nosotros" exact component={About} />
            <Route path="/carrito" exact component={Cart} />
            <Route path="/subir_producto" exact component={Upload} />
            <AuthCheck fallback={<AuthScreens />}></AuthCheck>
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
