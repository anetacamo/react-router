import { useParams } from "react-router-dom";
import postData from "../blogs.json";

export default function Page() {
  const { id } = useParams();
  const post = postData.find((post) => post.id === parseInt(id));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Published on: {post.date}</p>
      <p>Author: {post.author}</p>
    </div>
  );
}
