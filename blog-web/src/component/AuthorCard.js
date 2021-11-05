import { Card, Typography, Tag, Avatar, Row, Col } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { getPostAuthorLink, getPostedTime } from "lib/utils";
import { Link } from "react-router-dom";
dayjs.extend(relativeTime);

const { Meta } = Card;

function AuthorCard({ author }) {
  return (
    <Link to={getPostAuthorLink(author?._id)}>
      <Card hoverable>
        <Meta
          title={author?.username}
          description={`Joined ${getPostedTime(author?.createdAt)} ago`}
        />
        <Row justify="space-between" align="middle">
          <Col>
            <Typography.Paragraph style={{ marginTop: 20 }}>
              {author?.roles?.includes("admin") && (
                <Tag color="gold">Admin</Tag>
              )}
              {author?.roles?.includes("user") && (
                <Tag color="blue">Author</Tag>
              )}
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
