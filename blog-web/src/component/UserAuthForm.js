import React, { useState } from "react";
import { Row, Form, Input, Button, Col, message } from "antd";
import { useGLobalStateContext } from "context/GlobalState";
import axios from "axios";
import { authUrl } from "api/endpoints";

function UserAuthForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const { setJwtToken, setCurrentUser } = useGLobalStateContext();

  const onFinish = async (formData) => {
    const authType = isLoginForm ? "login" : "register";

    try {
      const response = await axios.post(`${authUrl}${authType}`, formData);
      setJwtToken(response.data.token);
      setCurrentUser(response.data.user);
    } catch (e) {
      message.error(e.response.data.message);
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
