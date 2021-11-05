import { postsUrl } from "api/endpoints";
import { pageSize } from "lib/utils";
import { useEffect, useState } from "react";
import http from "services/httpService";

function useGetPosts({ currentPage, authorParam }) {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    async function fetchPosts() {
      const offset = (currentPage - 1) * pageSize;

      const res = await http.get(
        `${postsUrl}?limit=${pageSize}${offset ? `&offset=${offset}` : ""}${
          authorParam ? `&author=${authorParam}` : ""
        }`
      );

      if (res?.data?.data) {
        setPosts(res?.data?.data);
        setTotalPosts(res?.data?.totalCount);
      }
    }

    fetchPosts();
  }, [currentPage, authorParam]);

  return { posts, totalPosts };
}

export default useGetPosts;
