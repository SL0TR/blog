import { lazy, Suspense } from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { PUBLIC_ROUTE } from "./routePaths";
import { useGLobalStateContext } from "context/GlobalState";
import { Spin } from "antd";

const Dashboard = lazy(() => import("pages/Dashboard"));
const SignInPage = lazy(() => import("pages/SignIn"));
const NotFound = lazy(() => import("pages/NotFound"));

function PrivateRoute({ children, ...rest }) {
  const { jwtToken } = useGLobalStateContext();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        jwtToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: PUBLIC_ROUTE.SIGN_IN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function Routes() {
  const publicRoutes = [
    {
      path: PUBLIC_ROUTE.LANDING,
      exact: true,
      component: SignInPage,
    },
    {
      path: PUBLIC_ROUTE.SIGN_IN,
      component: SignInPage,
    },
  ];

  return (
    <div>
      <Suspense fallback={<Spin />}>
        <Router>
          <Switch>
            {publicRoutes.map((route) => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default Routes;
