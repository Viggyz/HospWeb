import { Switch, Route } from "react-router";

import Home from "./pages/Homepage";
import Faq from "./pages/Faq";
import Product from "./pages/Product";
import Error from "./pages/Error";
import ProdSpec from "./pages/ProdSpec";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

//ONLY EVER USE YARN

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <Header />
        </div>
        <div className="row pt-2 mt-5">
          {/*Full fix this */}
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/faq" component={Faq} />
              <Route exact path="/product" component={Product} />
              <Route path="/product/:id" component={ProdSpec} />
              <Route path="*" component={Error} />
            </Switch>
          </ScrollToTop>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
