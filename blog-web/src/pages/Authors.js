import { Col, Pagination, Row, Typography } from "antd";
import { usersUrl } from "api/endpoints";
import AuthorCard from "component/AuthorCard";
import { useEffect, useState } from "react";
import http from "services/httpService";

function Authors() {
  const [users, setUsers] = useState([]);
  const [totalusers, totalUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    async function fetchusers() {
      const offset = (currentPage - 1) * pageSize;

      const res = await http.get(
        `${usersUrl}?limit=${pageSize}${offset ? `&offset=${offset}` : ""}`
      );

      if (res?.data?.data) {
        setUsers(res?.data?.data);
        totalUsers(res?.data?.totalCount);
      }
    }

    fetchusers();
  }, [currentPage]);

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
          {users.map((user) => (
            <Col span={8} key={user._id}>
              <AuthorCard user={user} />
            </Col>
          ))}
        </Row>
      </Col>
      {totalUsers > pageSize && (
        <Col span={20}>
          <Pagination
            defaultCurrent={1}
            current={currentPage}
            total={totalusers}
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
