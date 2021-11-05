import { Card, Typography, Tag, Avatar, Row, Col } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { getPostAuthorLink, getPostedTime } from "lib/utils";
import { Link } from "react-router-dom";
dayjs.extend(relativeTime);

const { Meta } = Card;

function AuthorCard({ user }) {
  return (
    <Link to={getPostAuthorLink(user?._id)}>
      <Card hoverable>
        <Meta
          title={user?.username}
          description={`Joined ${getPostedTime(user?.createdAt)} ago`}
        />
        <Row justify="space-between" align="middle">
          <Col>
            <Typography.Paragraph style={{ marginTop: 20 }}>
              {user?.roles?.includes("admin") && <Tag color="gold">Admin</Tag>}
              {user?.roles?.includes("user") && <Tag color="blue">Author</Tag>}
            </Typography.Paragraph>
          </Col>
          <Col>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          </Col>
        </Row>
      </Card>
    </Link>
  );
}

export default AuthorCard;
