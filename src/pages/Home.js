import React, { useState, useEffect } from "react";

import ProductList from "../components/products/ProductList";
import { getAllProducts } from "../lib/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };

    fetchAllProducts();
  }, []);
  return <ProductList products={products} />;
};

export default Home;
