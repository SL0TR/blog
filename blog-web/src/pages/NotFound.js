import React from "react";
import { Result, Button, Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import { PUBLIC_ROUTE } from "router";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

function NotFoundPage() {
  const { goBack } = useHistory();

  const getExtraComponents = () => (
    <Row type="flex" justify="space-around" align="middle">
      <Button onClick={goBack} type="ghost">
        Go Back
      </Button>
      <Button type="primary">
        <NavLink to={`/${PUBLIC_ROUTE.LANDING}`}>Go Home</NavLink>
      </Button>
    </Row>
  );

  return (
    <Row
      style={{ height: "100vh" }}
      type="flex"
      justify="center"
      align="middle"
    >
      <Col>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={getExtraComponents()}
        />
      </Col>
    </Row>
  );
}

export default NotFoundPage;
