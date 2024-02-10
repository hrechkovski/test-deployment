import { Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

export type BlogContextType = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

export const Blog = () => {
  const { blogPosts } = useBlog();

  return (
    <div>
      Blog
      <article>
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <h3>{post.type}</h3>
          </Link>
        ))}
      </article>
    </div>
  );
};
