import React from "react";

import classes from "./ProductList.module.css";
import ProductItem from "./ProductItem";

const ProductList = ({ products, heading }) => {
  return (
    <div>
      <h1 className={classes["list-heading"]}>{heading}</h1>

      <div className={classes["list"]}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
