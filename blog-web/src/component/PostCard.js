import { Card } from "antd";
import { getPostedTime } from "lib/utils";
import { Link } from "react-router-dom";
import { PRIVATE_ROUTE } from "router";

const { Meta } = Card;

function SinglePostCard({ post }) {
  return (
    <Link to={`${PRIVATE_ROUTE.POSTS}/${post?._id}`}>
      <Card
        hoverable
        cover={
          <>
            <img
              alt={post?.title}
              height="200"
              style={{ width: "100%" }}
              src={post?.thumbnailUrl || "https://picsum.photos/400/200"}
            />
          </>
        }
      >
        <Meta
          title={post?.title}
          description={`Posted ${getPostedTime(post?.createdAt)} ago`}
          style={{ marginBottom: 20 }}
        />
        @{post?.author?.username}
      </Card>
    </Link>
  );
}

export default SinglePostCard;
