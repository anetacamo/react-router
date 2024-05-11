import { Outlet } from "react-router-dom";
import Menu from "./Menu/Menu";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout() {
  return (
    <div>
      <Menu />
      <Breadcrumbs />
      <section>
        <Outlet />
      </section>
    </div>
  );
}
