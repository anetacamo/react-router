import { Routes, Route } from "react-router-dom";
import Pages from "./components/Pages";
import Page from "./components/Page";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pages" element={<Pages />}>
          <Route path=":id" element={<Page />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
