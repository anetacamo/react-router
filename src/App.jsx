import { Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Page from "./pages/Page";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Swimming from "./pages/Swimming";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />}>
          <Route path=":id" element={<Page />} />
          <Route path="swimming" element={<Swimming />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
