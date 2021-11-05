import { message } from "antd";
import { postsUrl } from "api/endpoints";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { PRIVATE_ROUTE } from "router";
import http from "services/httpService";

export const intialPostState = {
  body: "",
  title: "",
  thumbnailUrl: "",
  author: null,
  createdAt: null,
};

function usePostState() {
  const [post, setPost] = useState(intialPostState);
  const history = useHistory();

  const { id: postId } = useParams();

  useEffect(() => {
    async function fetchPost() {
      const response = await http.get(postsUrl + postId);
      if (response?.data) {
        setPost({
          body: response?.data?.body,
          title: response?.data?.title,
          thumbnailUrl: response?.data?.thumbnailUrl,
          author: response?.data?.author,
          createdAt: response?.data?.createdAt,
        });
      } else {
        message.error("Post not found");
        history.push(`/${PRIVATE_ROUTE.POSTS}`);
      }
    }
    if (postId) {
      fetchPost();
    }
  }, [postId, history]);

  return [post, setPost];
}

export default usePostState;
