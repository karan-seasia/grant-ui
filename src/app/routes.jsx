import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { Auth } from "../components/organisms/auth/Auth";
import { Home } from "../components/pages/home";

const Account = React.lazy(() => import("../components/pages/account"));
const Counter = React.lazy(() =>
  import("../components/pages/examples/counter")
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.userdata.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" children={() => <Home />} />

      <Route
        exact
        path="/auth/:status"
        children={({ match }) => <Auth match={match} />}
      />
      <PrivateRoute exact path="/account" component={Account} />

      {/* Example Routes */}
      <Route exact path="/examples/counter" children={() => <Counter />} />
    </Switch>
  );
};
