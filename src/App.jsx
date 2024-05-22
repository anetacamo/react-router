import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Page from "./pages/Page";
import Pages from "./pages/Pages";
import PageHome from "./pages/PageHome";
import Swimming from "./pages/Swimming";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pages" element={<Pages />}>
          <Route index element={<PageHome />} />
          <Route path=":id" element={<Page />} />
          <Route path="swimming" element={<Swimming />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
