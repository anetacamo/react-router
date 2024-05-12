import BlogList from "../components/BlogList";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* <h2>
        <Link to="/about">About</Link>
      </h2>
      <h2>
        <Link to="/contact">Contact</Link>
      </h2> */}
      <h2>
        <Link to="/blogs">Blogs</Link>
      </h2>
      <BlogList />
    </>
  );
}
