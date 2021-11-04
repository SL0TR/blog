import React, { useEffect, useState } from "react";
import { Row, Card } from "antd";
import { Redirect, useLocation } from "react-router-dom";
import { useGLobalStateContext } from "context/GlobalState";
import UserAuthForm from "component/UserAuthForm";
import { PRIVATE_ROUTE } from "router";

function SignIn() {
  const location = useLocation();
  const { jwtToken } = useGLobalStateContext();
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  useEffect(() => {
    if (jwtToken) {
      setRedirectToReferrer(true);
    }
  }, [jwtToken]);

  const { from } = location.state || {
    from: { pathname: `/${PRIVATE_ROUTE.BLOGS}` },
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ height: "100vh" }}
    >
      <div className="site-card-border-less-wrapper">
        <Card
          title="User Authentication"
          bordered={false}
          style={{ width: 300 }}
        >
          <UserAuthForm />
        </Card>
      </div>
    </Row>
  );
}

export default SignIn;
