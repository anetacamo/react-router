import { Outlet } from "react-router-dom";
import BlogInlineList from "../components/BlogInlineList";

export default function Pages() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <BlogInlineList />
      <Outlet />
    </div>
  );
}
