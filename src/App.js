import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Address from "./components/profile/Address";
import Dashboard from "./components/profile/Dashboard";
import AccountDetails from "./components/profile/AccountDetails/AccountDetails";
import CategoryDetail from "./pages/CategoryDetail";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Navigate replace to="/home" />} exact />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Nested Route in proile page */}
        <Route path="profile" element={<Profile />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="address" element={<Address />} />
          {/* Component Lifecycle Assignment */}
          <Route path="account" element={<AccountDetails />} />
        </Route>

        {/* Dynamic route for product detail page */}
        <Route path="product/:id" element={<ProductDetail />} />
        {/* Category Component added for Component Lifecycle Assignment */}
        <Route path="category/:id" element={<CategoryDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
