import React, { useState } from "react";
import { Row, Form, Input, Button, Col } from "antd";
import { useGLobalStateContext } from "context/GlobalState";
import { authUrl } from "api/endpoints";
import http from "services/httpService";

function UserAuthForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const { setJwtToken, setCurrentUser } = useGLobalStateContext();

  const onFinish = async (formData) => {
    const authType = isLoginForm ? "login" : "register";

    const response = await http.post(`${authUrl}${authType}`, formData);

    if (response?.data) {
      setJwtToken(response.data.token);
      setCurrentUser(response.data.user);
    }
  };

  return (
    <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item name="username" rules={[{ required: true }]} hasFeedback>
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true },
          {
            min: 4,
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Row type="flex" justify="center" gutter={20}>
        <Col>
          <Button onClick={() => setIsLoginForm((pS) => !pS)} size="large">
            {isLoginForm ? "Register" : "Login"}
          </Button>
        </Col>
        <Col>
          <Form.Item>
            <Button
              size="large"
              className="px-4"
              type="primary"
              htmlType="submit"
            >
              {isLoginForm ? "Login" : "Register"}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default UserAuthForm;
