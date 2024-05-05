import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contact</Link>
          </li>
          <li>
            <Link to={`/pages/`}>Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
