import { Card, Typography, Tag } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const { Meta } = Card;

function AuthorCard({ user }) {
  return (
    <Card hoverable>
      <Meta
        title={user?.username}
        description={`Joined ${dayjs(user?.createdAt).fromNow("h")} ago`}
      />
      <Typography.Paragraph style={{ marginTop: 20 }}>
        {user?.roles?.includes("gold") && <Tag color="magenta">Admin</Tag>}
        {user?.roles?.includes("user") && <Tag color="volcano">Author</Tag>}
      </Typography.Paragraph>
    </Card>
  );
}

export default AuthorCard;
