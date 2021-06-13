import { Switch, Route } from "react-router";

import Home from "./pages/Homepage";
import About from "./pages/About";
import Product from "./pages/Product";
import Error from "./pages/Error";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

//ONLY EVER USE YARN

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-5">
          <Header />
        </div>
        <div className="row py-15 my-15">
          {/*Full fix this */}
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
            <Route path="*" component={Error}>
              <Error />
            </Route>
          </Switch>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
