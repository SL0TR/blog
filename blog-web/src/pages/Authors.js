import { Col, Pagination, Row, Typography } from "antd";
import AuthorCard from "component/AuthorCard";
import useGetAuthors from "hooks/useGetAuthors";
import { pageSize } from "lib/utils";
import { useState } from "react";

function Authors() {
  const [currentPage, setCurrentPage] = useState(1);
  const { authors, totalCount } = useGetAuthors({ currentPage });

  return (
    <Row
      span={24}
      style={{ marginTop: 50 }}
      gutter={[50, 50]}
      justify="center"
      align="middle"
    >
      <Col span={24} align="middle">
        <Typography.Title>Authors</Typography.Title>
      </Col>
      <Col span={20} style={{ marginBottom: 50 }}>
        <Row gutter={[50, 50]}>
          {authors.map((author) => (
            <Col span={8} key={author._id}>
              <AuthorCard author={author} />
            </Col>
          ))}
        </Row>
      </Col>
      {totalCount > pageSize && (
        <Col span={20}>
          <Pagination
            defaultCurrent={1}
            current={currentPage}
            total={totalCount}
            pageSize={pageSize}
            onChange={(page) => setCurrentPage(page)}
          />
          ,
        </Col>
      )}
    </Row>
  );
}

export default Authors;
