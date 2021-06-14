import { Switch, Route } from "react-router";
import React, { useState, useEffect } from "react";

import Home from "./pages/Homepage";
import Faq from "./pages/Faq";
import Product from "./pages/Product";
import Error from "./pages/Error";
import ProdSpec from "./pages/ProdSpec";
import Loading from "./pages/Loading";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

//ONLY EVER USE YARN

function App() {
  let [loading, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoad(!loading), 1000);
  }, []);
  if (loading) return <Loading />;
  else {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <Header />
          </div>
          <div className="row mt-5 pt-5">
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
}

export default App;
