import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styles from "./App.module.css";

import Admin from "./Admin";
import { ROUTES } from "../constants";
import Login from "./Login";
import Register from "./Register";

class App extends Component {
  render() {
    return (
      <main className={styles.layout}>
        <Switch>
          <Route path={ROUTES.admin} exact strict component={Admin} />
          <Route path={ROUTES.login} component={Login} />
          <Route path={ROUTES.register} component={Register} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
