import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductsByCategory } from "../lib/api";
import ProductList from "../components/products/ProductList";

const CategoryDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setIsLoading(true);
      const result = await getProductsByCategory(id);

      setProducts(result.products);
      setCategory(result.category);
      setIsLoading(false);
    };

    fetchProductsByCategory();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ProductList
        products={products}
        heading={`Products under the category '${category?.name}'`}
      />
    </div>
  );
};

export default CategoryDetail;
