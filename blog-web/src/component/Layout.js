import { Header } from "antd/lib/layout/layout";
import { Avatar, Button, Col, Menu, Row, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { PRIVATE_ROUTE } from "router";
import { useGLobalStateContext } from "context/GlobalState";

function Layout({ children }) {
  const location = useLocation();
  const { setJwtToken, currentUser } = useGLobalStateContext();

  return (
    <>
      <Header className="header">
        <Row justify="space-between">
          <Col>
            <Menu
              defaultSelectedKeys={[`/${PRIVATE_ROUTE.POSTS}`]}
              selectedKeys={[location.pathname]}
              theme="dark"
              mode="horizontal"
            >
              <Menu.Item key={`/${PRIVATE_ROUTE.POSTS}`}>
                <NavLink to={`/${PRIVATE_ROUTE.POSTS}`}>Posts</NavLink>
              </Menu.Item>
              <Menu.Item key={`/${PRIVATE_ROUTE.AUTHORS}`}>
                <NavLink to={`/${PRIVATE_ROUTE.AUTHORS}`}>Authors</NavLink>
              </Menu.Item>
              <Menu.Item key={`/${PRIVATE_ROUTE.CREATE}`}>
                <NavLink to={`/${PRIVATE_ROUTE.CREATE}`}>Create</NavLink>
              </Menu.Item>
            </Menu>
          </Col>
          <Row gutter={30}>
            <Typography.Paragraph style={{ color: "#eee" }}>
              @{currentUser?.username}
            </Typography.Paragraph>
            <Col>
              <Button onClick={() => setJwtToken(null)}>Logout</Button>
            </Col>
          </Row>
        </Row>
      </Header>

      {children}
    </>
  );
}

export default Layout;
