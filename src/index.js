import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import App from "./components/App/App";
import Settings from "./components/Settings/Settings";
import Report from "./components/Report";
import EmailLogin from "./components/EmailLogin/EmailLogin";
import store from "./redux/store";

import "./index.css";

function Main() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/">
            <App />
          </Route>
        </Switch>
        <Route path="/login">
          <EmailLogin />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/report">
          <Report />
        </Route>
      </Router>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
