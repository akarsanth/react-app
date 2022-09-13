import React, { useState, useEffect } from "react";

import ProductList from "../components/products/ProductList";
import CategoryList from "../components/categories/CategoryList";
import { getAllProducts, getAllCategories } from "../lib/api";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };

    const fetchAllCategories = async () => {
      const categories = await getAllCategories();
      setCategories(categories);
    };

    fetchAllProducts();
    fetchAllCategories();
  }, []);
  return (
    <>
      <ProductList products={products} heading="Products" />
      <CategoryList categories={categories} />
    </>
  );
};

export default Home;
