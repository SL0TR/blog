import { Affix, Button, Col, Input, message, Row, Typography } from "antd";
import { postsUrl } from "api/endpoints";
import { useGLobalStateContext } from "context/GlobalState";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router";
import http from "services/httpService";

const intialPostState = {
  body: "",
  title: "",
  thumbnailUrl: "",
  author: null,
};

function Post({ postTypeProp = "create" }) {
  const [post, setPost] = useState(intialPostState);
  const [postType, setPostType] = useState(postTypeProp);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useGLobalStateContext();
  const [isPostAuthor, setIsPostAuthor] = useState(false);

  const { id: postId } = useParams();

  async function handleSubmit() {
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

  // fetch posts if postId is present on url
  useEffect(() => {
    async function fetchPost() {
      const response = await http.get(postsUrl + postId);
      setPost({
        body: response?.data?.body,
        title: response?.data?.title,
        thumbnailUrl: response?.data?.thumbnailUrl,
        author: response?.data?.author,
      });
    }
    if (postId) {
      fetchPost();
    }
  }, [postId]);

  // check if current user is the author of the post
  useEffect(() => {
    if (currentUser?._id === post?.author?._id) {
      setIsPostAuthor(true);
    }
  }, [post?.author?._id, currentUser?._id]);

  return (
    <Row gutter={[20, 30]} justify="center">
      {isPostAuthor && (
        <Col span={20} align="end">
          <Affix offsetTop={20}>
            <Button onClick={() => setPostType("update")} type="primary">
              Edit Post
            </Button>
          </Affix>
        </Col>
      )}
      <Col span={20}>
        {postType === "view" ? (
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
      <Col span={20}>
        {postType === "view" ? (
          <img
            src={post?.thumbnailUrl || "https://picsum.photos/400/200"}
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
      <Col span={20}>
        {postType !== "view" && (
          <Typography.Paragraph>*Body</Typography.Paragraph>
        )}

        <ReactQuill
          theme={postType === "view" ? "bubble" : "snow"}
          value={post.body}
          onChange={(content) => setPost((pS) => ({ ...pS, body: content }))}
          readOnly={postType === "view"}
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
