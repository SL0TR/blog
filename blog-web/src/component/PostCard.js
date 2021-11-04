import { Card } from "antd";
import { Link } from "react-router-dom";
import { PRIVATE_ROUTE } from "router";

const { Meta } = Card;

function SinglePostCard({ post }) {
  return (
    <Link to={`${PRIVATE_ROUTE.POSTS}/${post?._id}`}>
      <Card
        hoverable
        cover={
          <img
            alt={post?.title}
            src={post?.thumbnailurl || "https://picsum.photos/400/200"}
          />
        }
      >
        <Meta title={post?.title} />
      </Card>
    </Link>
  );
}

export default SinglePostCard;
