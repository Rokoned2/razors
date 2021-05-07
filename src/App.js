import "./App.css";
import "./sass/main.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/sobre" exact>
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
