import { Link } from "react-router-dom";
import postData from "../blogs.json";

export default function BlogInlineList() {
  return (
    <ul>
      {postData.map((post) => (
        <li key={post.id}>
          <Link to={`/pages/${post.id}`}>{post.title}</Link>
        </li>
      ))}
      <li>
        <Link to={`/pages/swimming`}>Better not swim in the thunderstorm</Link>
      </li>
    </ul>
  );
}
