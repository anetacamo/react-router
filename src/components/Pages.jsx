import { Link, Outlet } from "react-router-dom";
import postData from "../blogs.json";

export default function Pages() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {postData.map((post) => (
          <li key={post.id}>
            <Link to={`/pages/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
