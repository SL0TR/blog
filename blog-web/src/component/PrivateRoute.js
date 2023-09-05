import Layout from "component/Layout";
import { useGLobalStateContext } from "context/GlobalState";
import { Redirect, Route } from "react-router";
import { PUBLIC_ROUTE } from "router";

export default function PrivateRoute({ children, ...rest }) {
  const { jwtToken } = useGLobalStateContext();

  return (
    <Layout>
      <Route
        {...rest}
        render={({ location }) =>
          jwtToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: `/${PUBLIC_ROUTE.SIGN_IN}`,
                state: { from: location },
              }}
            />
          )
        }
      />
    </Layout>
  );
}
