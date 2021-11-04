import { Col, Pagination, Row, Typography } from "antd";
import { postsUrl } from "api/endpoints";
import SinglePostCard from "component/PostCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import http from "services/httpService";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  const pageSize = 6;

  useEffect(() => {
    async function fetchPosts() {
      const offset = (currentPage - 1) * pageSize;
      const params = new URLSearchParams(location.search);
      const author = params.get("author");

      const res = await http.get(
        `${postsUrl}?limit=${pageSize}${offset ? `&offset=${offset}` : ""}${
          author ? `&author=${author}` : ""
        }`
      );

      if (res?.data?.data) {
        setPosts(res?.data?.data);
        setTotalPosts(res?.data?.totalCount);
      }
    }

    fetchPosts();
  }, [currentPage, location.search]);

  return (
    <Row
      span={24}
      style={{ marginTop: 50 }}
      gutter={[50, 50]}
      justify="center"
      align="middle"
    >
      <Col span={24} align="middle">
        <Typography.Title>Posts</Typography.Title>
      </Col>
      <Col span={20} style={{ marginBottom: 50 }}>
        <Row gutter={[50, 50]}>
          {posts.map((post) => (
            <Col span={8} key={post._id}>
              <SinglePostCard post={post} />
            </Col>
          ))}
        </Row>
      </Col>
      {totalPosts > pageSize && (
        <Col span={20}>
          <Pagination
            defaultCurrent={1}
            current={currentPage}
            total={totalPosts}
            pageSize={pageSize}
            onChange={(page) => setCurrentPage(page)}
          />
        </Col>
      )}
    </Row>
  );
}

export default Posts;
