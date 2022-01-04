import React from "react";
import Header from './Containers/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "./Containers/ProductList";
import ProductDetail from "./Containers/ProductDetail";


import "./App.css";

function App() {
    return (
      <BrowserRouter>
          <Header/>
          <Switch>
              <Route path= '/' exact component={ProductList}/>
              <Route path= '/product/:productId' exact component={ProductDetail}/>
              <Route>404 Not Found !</Route>
          </Switch>
      </BrowserRouter>
    )
}

export default App;
