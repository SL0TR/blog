import { Col, Row } from "antd";
import Post from "component/Post";

function SinglePost() {
  return (
    <Row style={{ marginTop: 50 }} gutter={[20, 30]} justify="center">
      <Col span={16}>
        <Post postTypeProp="view" />
      </Col>
    </Row>
  );
}

export default SinglePost;
