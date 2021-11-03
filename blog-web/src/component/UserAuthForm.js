import React, { useState } from "react";
import { Row, Form, Input, Button, Col, message } from "antd";
import { useHistory } from "react-router-dom";
import { useGLobalStateContext } from "context/GlobalState";
import axios from "axios";

function UserAuthForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const { setJwtToken, setCurrentUser } = useGLobalStateContext();

  const onFinish = async (formData) => {
    const endpoint = isLoginForm ? "login" : "register";

    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/${endpoint}`,
        formData
      );
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

      {!isLoginForm && (
        <Form.Item
          name="password confirm"
          hasFeedback
          rules={[
            {
              required: true,
            },
            {
              min: 4,
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
      )}
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
