import { Col, Row, Typography } from "antd";
import { postsUrl } from "api/endpoints";
import SinglePostCard from "component/PostCard";
import { useEffect, useState } from "react";
import http from "services/httpService";

function Posts() {
  const [posts, setPosts] = useState([]);

  console.log(posts);

  async function fetchPosts() {
    const res = await http.get(postsUrl);

    if (res?.data?.data) {
      setPosts(res?.data?.data);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Row
      span={24}
      style={{ marginTop: 50 }}
      gutter={[50, 50]}
      justify="center"
      align="middle"
    >
      <Col className="gutter-row" span={24} align="middle">
        <Typography.Title>Posts</Typography.Title>
      </Col>
      <Col className="gutter-row" span={20}>
        <Row gutter={[50, 50]}>
          {posts.map((post) => (
            <Col className="gutter-row" span={8} key={post._id}>
              <SinglePostCard post={post} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default Posts;
