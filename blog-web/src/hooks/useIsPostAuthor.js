import { useGLobalStateContext } from "context/GlobalState";
import { useEffect, useState } from "react";

function useIsPostAuthor(authorId) {
  const { currentUser } = useGLobalStateContext();
  const [isPostAuthor, setIsPostAuthor] = useState(false);

  useEffect(() => {
    if (currentUser?._id === authorId) {
      setIsPostAuthor(true);
    } else {
      setIsPostAuthor(false);
    }
  }, [authorId, currentUser?._id]);

  return isPostAuthor;
}

export default useIsPostAuthor;
