import { usersUrl } from "api/endpoints";
import { pageSize } from "lib/utils";
import { useEffect, useState } from "react";
import http from "services/httpService";

function useGetAuthors({ currentPage }) {
  const [authors, setAuthors] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function fetchAuthors() {
      const offset = (currentPage - 1) * pageSize;

      const res = await http.get(
        `${usersUrl}?limit=${pageSize}${offset ? `&offset=${offset}` : ""}`
      );

      if (res?.data?.data) {
        setAuthors(res?.data?.data);
        setTotalCount(res?.data?.totalCount);
      }
    }

    fetchAuthors();
  }, [currentPage]);

  return { authors, totalCount };
}

export default useGetAuthors;
