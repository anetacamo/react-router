import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <div>
        <Link to={`/`} className="menu__item menu__item--logo">
          Home
        </Link>
      </div>
      <div>
        <Link to={`/about`} className="menu__item">
          About
        </Link>
        <Link to={`/contact`} className="menu__item">
          Contact
        </Link>
        <Link to={`/pages/`} className="menu__item">
          Blog
        </Link>
      </div>
    </nav>
  );
}
