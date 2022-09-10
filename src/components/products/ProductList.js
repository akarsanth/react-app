import React from "react";

import classes from "./ProductList.module.css";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1 className={classes["list-heading"]}>Products</h1>

      <div className={classes["list"]}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
