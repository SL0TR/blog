import { Col, Pagination, Row, Typography } from "antd";
import SinglePostCard from "component/PostCard";
import useGetAuthor from "hooks/useGetAuthor";
import useGetPosts from "hooks/useGetPosts";
import { pageSize } from "lib/utils";
import { useMemo, useState } from "react";
import { useLocation } from "react-router";

function Posts() {
  const location = useLocation();
  const authorParam = useMemo(
    () => new URLSearchParams(location.search)?.get("author"),
    [location.search]
  );
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, totalPosts } = useGetPosts({ authorParam, currentPage });
  const { author } = useGetAuthor(authorParam);

  return (
    <Row
      span={24}
      style={{ marginTop: 50 }}
      gutter={[50, 50]}
      justify="center"
      align="middle"
    >
      <Col span={24} align="middle">
        <Typography.Title>
          {authorParam && author ? `Posts by ${author?.username}` : "All Posts"}
        </Typography.Title>
      </Col>

      <Col span={20} style={{ marginBottom: 50 }} align="middle">
        {posts.length > 0 ? (
          <Row gutter={[50, 50]}>
            {posts.map((post) => (
              <Col span={8} key={post._id}>
                <SinglePostCard post={post} />
              </Col>
            ))}
          </Row>
        ) : (
          <Typography.Paragraph>No posts found</Typography.Paragraph>
        )}
      </Col>
      {totalPosts > pageSize && (
        <Col span={20}>
          <Pagination
            style={{ marginBottom: 50 }}
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
