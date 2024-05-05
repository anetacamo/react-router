import { Outlet, useLocation, Link } from "react-router-dom";
import Menu from "./Menu/Menu";

export default function Layout() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div>
      <Menu />

      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name}>
            <span> / </span>
            {isLast ? <span>{name}</span> : <Link to={routeTo}>{name}</Link>}
          </span>
        );
      })}
      <Outlet />
    </div>
  );
}
