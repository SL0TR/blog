import { Button, Col, Input, message, Row, Typography } from "antd";
import { postsUrl } from "api/endpoints";
import useIsPostAuthor from "hooks/useIsPostAuthor";
import usePostState, { intialPostState } from "hooks/usePostState";
import { getPostAuthorLink, getPostedTime } from "lib/utils";
import { useState } from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import http from "services/httpService";

function Post({ postTypeProp = "create" }) {
  const [post, setPost] = usePostState();
  const isPostAuthor = useIsPostAuthor(post?.author?._id);
  const { id: postId } = useParams();
  const [postType, setPostType] = useState(postTypeProp);
  const [isLoading, setIsLoading] = useState(false);
  const isViewOnlyPost = postType === "view";
  const isUpdatePost = postType === "update";

  async function submitRequest(payload) {
    setIsLoading(true);
    let response = null;

    // seperate request for create and update
    if (postType === "create") {
      response = await http.post(postsUrl, payload);
    }

    if (postType === "update") {
      response = await http.patch(postsUrl + postId, payload);
    }

    if (response?.data) {
      message.success(`Post ${postType}d successfully!`);
      if (postType === "create") {
        setPost(intialPostState);
      }
      setIsLoading(false);
    }
  }

  function handleSubmit() {
    const { title, body, thumbnailUrl } = post;

    if (!title || !body) {
      message.error("Please fill all required the fields");
      return;
    }

    const payload = {
      title,
      body,
      ...(thumbnailUrl ? { thumbnailUrl } : {}),
    };

    submitRequest(payload);
  }

  return (
    <Row gutter={[20, 30]} justify="center">
      {isPostAuthor && (
        <Col span={24} align="middle">
          <Button
            type={isUpdatePost ? "ghost" : "primary"}
            onClick={() => setPostType(isUpdatePost ? "view" : "update")}
          >
            {isUpdatePost ? "Cancel Edit" : "Edit Post"}
          </Button>
        </Col>
      )}
      <Col span={24}>
        {isViewOnlyPost ? (
          <Typography.Title>{post?.title}</Typography.Title>
        ) : (
          <>
            <Typography.Paragraph>*Title</Typography.Paragraph>
            <Input
              placeholder="Title of the post"
              value={post.title}
              onChange={(e) =>
                setPost((pS) => ({ ...pS, title: e.target.value }))
              }
            />
          </>
        )}
      </Col>
      <Col span={24}>
        {isViewOnlyPost ? (
          <img
            src={post?.thumbnailUrl || "https://picsum.photos/400/240"}
            alt={post?.title}
          />
        ) : (
          <>
            <Typography.Paragraph>Thumbnail URL</Typography.Paragraph>
            <Input
              placeholder="Thumbnail URL of the post (if empty a dummy image will be placed)"
              value={post.thumbnailUrl}
              onChange={(e) =>
                setPost((pS) => ({ ...pS, thumbnailUrl: e.target.value }))
              }
            />
          </>
        )}
      </Col>
      {isViewOnlyPost && (
        <Col span={24}>
          <Typography.Paragraph>
            {`Posted ${getPostedTime(post?.createdAt)} ago by `}
            <Link to={getPostAuthorLink(post?.author?._id)}>
              @{post?.author?.username}
            </Link>
          </Typography.Paragraph>
        </Col>
      )}

      <Col span={24}>
        {postType !== "view" && (
          <Typography.Paragraph>*Body</Typography.Paragraph>
        )}

        <ReactQuill
          theme={isViewOnlyPost ? "bubble" : "snow"}
          value={post.body}
          onChange={(content) => setPost((pS) => ({ ...pS, body: content }))}
          readOnly={isViewOnlyPost}
          sho
        />
      </Col>
      {postType !== "view" && (
        <Col span={24} align="middle">
          <Button
            style={{ marginBottom: 50 }}
            disabled={isLoading}
            onClick={handleSubmit}
            type="primary"
            size="large"
          >
            Submit!
          </Button>
        </Col>
      )}
    </Row>
  );
}

export default Post;
