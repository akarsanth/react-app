import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
