import { Card, Typography, Tag } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import { PRIVATE_ROUTE } from "router";
dayjs.extend(relativeTime);

const { Meta } = Card;

function AuthorCard({ user }) {
  return (
    <Link to={`${PRIVATE_ROUTE.POSTS}?author=${user?._id}`}>
      <Card hoverable>
        <Meta
          title={user?.username}
          description={`Joined ${dayjs(user?.createdAt).fromNow("h")} ago`}
        />
        <Typography.Paragraph style={{ marginTop: 20 }}>
          {user?.roles?.includes("admin") && <Tag color="gold">Admin</Tag>}
          {user?.roles?.includes("user") && <Tag color="blue">Author</Tag>}
        </Typography.Paragraph>
      </Card>
    </Link>
  );
}

export default AuthorCard;
