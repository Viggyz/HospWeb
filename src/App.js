import { Switch, Route } from "react-router";

import Home from "./pages/Homepage";
import About from "./pages/About";
import Product from "./pages/Product";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/about" component={About}>
          <About />
        </Route>
        <Route path="/product" component={Product}>
          <Product />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
