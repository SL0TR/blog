import { Card, Typography } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import { PRIVATE_ROUTE } from "router";
dayjs.extend(relativeTime);

const { Meta } = Card;

function SinglePostCard({ post }) {
  return (
    <Link to={`${PRIVATE_ROUTE.POSTS}/${post?._id}`}>
      <Card
        hoverable
        cover={
          <img
            alt={post?.title}
            height="200"
            width="300"
            src={post?.thumbnailUrl || "https://picsum.photos/400/200"}
          />
        }
      >
        <Meta
          title={post?.title}
          description={`Posted ${dayjs(post?.createdAt).fromNow("h")} ago`}
        />
        <Typography.Paragraph style={{ marginTop: 20 }}>
          Posted by{" "}
          <span style={{ fontWeight: "bold" }}> @{post?.author?.username}</span>
        </Typography.Paragraph>
      </Card>
    </Link>
  );
}

export default SinglePostCard;
