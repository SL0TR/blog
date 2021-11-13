import { Col, Typography } from "antd";
import { getPostAuthorLink, getPostedTime } from "lib/utils";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";

function PostViewer({ post }) {
  return (
    <>
      <Col span={24}>
        <Typography.Title>{post?.title}</Typography.Title>
      </Col>
      <Col span={24}>
        <img
          src={post?.thumbnailUrl || "https://picsum.photos/400/240"}
          alt={post?.title}
          style={{ width: "100%" }}
        />
      </Col>
      <Col span={24}>
        <Typography.Paragraph>
          {`Posted ${getPostedTime(post?.createdAt)} ago by `}
          <Link to={getPostAuthorLink(post?.author?._id)}>
            @{post?.author?.username}
          </Link>
        </Typography.Paragraph>
      </Col>

      <Col span={24}>
        <ReactQuill theme="bubble" value={post.body} readOnly sho />
      </Col>
    </>
  );
}

export default PostViewer;
