import postData from "../blogs.json";
import { Link } from "react-router-dom";

export default function BlogList() {
  return (
    <div className="blogs">
      {postData.map((post) => (
        <div key={post.id} className="blog">
          <Link to={`/pages/${post.id}`}>
            <div className="blog__image-holder">
              <img
                src={`/react-router/images/${post.id}.png`}
                alt={post.title}
              />
            </div>
            <h4 className="blog__title">{post.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}
