import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { Header } from "./common components/Header";
import { Blog } from "./components/Blog";
import { BlogProvider } from "./context/BlogContext";
import { PostDetails } from "./components/PostDetails";

function App() {
  return (
    <BlogProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<PostDetails />} />
      </Routes>
    </BlogProvider>
  );
}

export default App;
