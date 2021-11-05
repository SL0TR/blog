import { Card } from "antd";
import { getPostAuthorLink, getPostedTime } from "lib/utils";
import { Link } from "react-router-dom";
import { PRIVATE_ROUTE } from "router";

const { Meta } = Card;

function SinglePostCard({ post }) {
  return (
    <Card
      hoverable
      cover={
        <>
          <Link
            style={{ width: "100%" }}
            to={`${PRIVATE_ROUTE.POSTS}/${post?._id}`}
          >
            <img
              alt={post?.title}
              height="200"
              style={{ width: "100%" }}
              src={post?.thumbnailUrl || "https://picsum.photos/400/200"}
            />
          </Link>
        </>
      }
    >
      <Meta
        title={post?.title}
        description={`Posted ${getPostedTime(post?.createdAt)} ago`}
        style={{ marginBottom: 20 }}
      />
      <Link to={getPostAuthorLink(post?.author?._id)}>
        @{post?.author?.username}
      </Link>
    </Card>
  );
}

export default SinglePostCard;
