import { Col, Row, Typography } from "antd";
import Post from "component/Post";

function CreatePost() {
  return (
    <Row style={{ marginTop: 50 }} gutter={[20, 30]} justify="center">
      <Col span={24} align="middle">
        <Typography.Title>Create Post</Typography.Title>
      </Col>
      <Col span={20}>
        <Post postTypeProp="create" />
      </Col>
    </Row>
  );
}

export default CreatePost;
