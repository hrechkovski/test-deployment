import { createContext, useContext, useEffect, useState } from "react";

type BlogContextType = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

export type BlogPostsContext = {
  blogPosts: BlogContextType[];
};

const blogContextUsingType = createContext<BlogPostsContext | null>(null);

export const useBlog = () => {
  const contextForBlogPosts = useContext(blogContextUsingType);
  if (!contextForBlogPosts) {
    throw new Error("useContext");
  }
  return contextForBlogPosts;
};

type BlogProviderProps = {
  children: React.ReactNode;
};

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [blogPosts, setBlogPosts] = useState<BlogContextType[]>([]);

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/ten")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogPosts(data);
      });
  }, []);

  return (
    <blogContextUsingType.Provider value={{ blogPosts }}>
      {children}
    </blogContextUsingType.Provider>
  );
};
