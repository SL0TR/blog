import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { PUBLIC_ROUTE } from "./routePaths";
import PrivateRoute from "component/PrivateRoute";
import Posts from "pages/Posts";
import NotFoundPage from "pages/NotFound";
import SignIn from "pages/SignIn";
import { PRIVATE_ROUTE } from "router";
import Authors from "pages/Authors";
import CreatePost from "pages/CreatePost";
import SinglePost from "pages/SinglePost";

function Routes() {
  const publicRoutes = [
    {
      path: PUBLIC_ROUTE.LANDING,
      exact: true,
      component: SignIn,
    },
    {
      path: PUBLIC_ROUTE.SIGN_IN,
      component: SignIn,
    },
  ];

  const privateRoutes = [
    {
      path: PRIVATE_ROUTE.POSTS,
      component: Posts,
    },
    {
      path: PRIVATE_ROUTE.AUTHORS,
      component: Authors,
    },
    {
      path: PRIVATE_ROUTE.CREATE,
      component: CreatePost,
    },
    {
      path: PRIVATE_ROUTE.SINGLE_POST,
      component: SinglePost,
    },
  ];
  return (
    <div>
      <Router>
        <Switch>
          {publicRoutes.map((route) => (
            <Route key={route.path} path={`/${route.path}`} exact={route.exact}>
              <route.component />
            </Route>
          ))}
          {privateRoutes.map((route) => (
            <PrivateRoute
              key={route.path}
              path={`/${route.path}`}
              exact={route?.exact}
            >
              <route.component />
            </PrivateRoute>
          ))}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
