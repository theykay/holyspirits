import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalProvider from "./utils/GlobalContext";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Store from "./pages/Store";
import Account from "./pages/Account";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <GlobalProvider>
          <div className="App">
            <Switch>
              <Route exact path="/" render={Store} />
              <Route exact path="/account" render={Account} />
              <Route exact path="/checkout" render={Checkout} />
              <Route exact path="/admin" render={Admin} />
            </Switch>
          </div>
        </GlobalProvider>
      </Router>
    </>
  );
};

export default App;
