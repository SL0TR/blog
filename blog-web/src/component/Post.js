import { Button, Col, message, Row } from "antd";
import { postsUrl } from "api/endpoints";
import useIsPostAuthor from "hooks/useIsPostAuthor";
import useGetPost, { intialPostState } from "hooks/useGetPost";
import { useState } from "react";
import { useParams } from "react-router";
import http from "services/httpService";
import PostEditor from "./PostEditor";
import PostViewer from "./PostViewer";

function Post({ postTypeProp = "create" }) {
  const [post, setPost] = useGetPost();
  const isPostAuthor = useIsPostAuthor(post?.author?._id);
  const { id: postId } = useParams();
  const [postType, setPostType] = useState(postTypeProp);
  const [isLoading, setIsLoading] = useState(false);
  const isViewOnlyPost = postType === "view";
  const isEditOnlyPost = postType === "edit";
  const isCreateOnlyPost = postType === "create";

  async function submitRequest(payload) {
    setIsLoading(true);

    // seperate request for create and update
    if (isCreateOnlyPost) {
      const response = await http.post(postsUrl, payload);

      if (response?.data) {
        message.success(`Post  Created successfully!`);
        setPost(intialPostState);
      }
    }

    if (isEditOnlyPost) {
      const response = await http.patch(postsUrl + postId, payload);

      if (response?.data) {
        message.success(`Post  updated successfully!`);
      }
    }

    setIsLoading(false);
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
            type={isEditOnlyPost ? "ghost" : "primary"}
            onClick={() => setPostType(isEditOnlyPost ? "view" : "edit")}
          >
            {isEditOnlyPost ? "Cancel Edit" : "Edit Post"}
          </Button>
        </Col>
      )}
      {(isCreateOnlyPost || isEditOnlyPost) && (
        <PostEditor
          post={post}
          setPost={setPost}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      )}
      {isViewOnlyPost && <PostViewer post={post} />}
    </Row>
  );
}

export default Post;
