import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <div className="logo">
        <Link to={`/`}>Home</Link>
      </div>
      <div className="menu-items">
        <Link to={`/about`} className="menu-item">
          About
        </Link>
        <Link to={`/contact`} className="menu-item">
          Contact
        </Link>
        <Link to={`/pages/`} className="menu-item">
          Blog
        </Link>
      </div>
    </nav>
  );
}
