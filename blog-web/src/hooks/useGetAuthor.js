import { usersUrl } from "api/endpoints";
import { useEffect, useState } from "react";
import http from "services/httpService";

function useGetAuthor(authorId) {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    async function fetchAuthor() {
      const res = await http.get(`${usersUrl}${authorId}`);

      if (res?.data) {
        setAuthor(res.data);
      }
    }

    if (authorId) {
      fetchAuthor();
    }
  }, [authorId]);

  return { author };
}

export default useGetAuthor;
