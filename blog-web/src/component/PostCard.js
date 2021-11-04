import { Card, Typography } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import { PRIVATE_ROUTE } from "router";
import { useHistory } from "react-router";
dayjs.extend(relativeTime);

const { Meta } = Card;

function SinglePostCard({ post }) {
  const history = useHistory();

  function handleAuthorClick(e) {
    e.preventDefault();
    history.push(`${PRIVATE_ROUTE.POSTS}?author=${post?.author?._id}`);
  }

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

        <Typography.Paragraph
          onClick={handleAuthorClick}
          style={{
            marginTop: 20,
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          @{post?.author?.username}
        </Typography.Paragraph>
      </Card>
    </Link>
  );
}

export default SinglePostCard;
