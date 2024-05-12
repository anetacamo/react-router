import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>Oops!</h1>
      <p>The page you are looking for was not found</p>
      <Link to="/">go home</Link>
    </>
  );
}
