import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface PostType {
  id: number;
  setup: string;
  punchline: string;
}

export const PostDetails = () => {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState<PostType | null>(null);
  useEffect(() => {
    fetch(`https://official-joke-api.appspot.com/jokes/${id}`)
      .then((response) => response.json())
      .then((data) => setPostDetails(data));
  }, [id]);
  return (
    <div>
      <h1>Post Details</h1>
      <div>
        <h2>{postDetails && postDetails.setup}</h2>
        <p>{postDetails && postDetails.punchline}</p>
      </div>
    </div>
  );
};
