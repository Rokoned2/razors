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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/productos" exact>
            <ProductSearch />
          </Route>
          <Route path="/productos/:id" exact>
            <ProductDetails />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/nosotros" exact>
            <About />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
