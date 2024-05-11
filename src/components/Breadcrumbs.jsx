import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <section>
      <div>
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
      </div>
    </section>
  );
}
