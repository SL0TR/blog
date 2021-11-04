import React from "react";
import { Result, Button, Row, Col } from "antd";
import { useHistory } from "react-router-dom";

function NotFoundPage() {
  const { goBack } = useHistory();

  const getExtraComponents = () => (
    <Button onClick={goBack} type="primary">
      Go Back
    </Button>
  );

  return (
    <Row style={{ height: "100%" }} type="flex" justify="center" align="middle">
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
