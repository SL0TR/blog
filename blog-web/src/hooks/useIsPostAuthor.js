import { useGLobalStateContext } from "context/GlobalState";
import { useEffect, useState } from "react";

function useIsPostAuthor(authorId) {
  const { currentUser } = useGLobalStateContext();
  const [isPostAuthor, setIsPostAuthor] = useState(false);

  useEffect(() => {
    setIsPostAuthor(currentUser?._id === authorId);
  }, [authorId, currentUser?._id]);

  return isPostAuthor;
}

export default useIsPostAuthor;
