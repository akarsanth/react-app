import React from "react";

import classes from "./ProductDetails.module.css";

const ProductDetails = ({ product }) => {
  return (
    <div className={classes["product-details"]}>
      <img src={product.image} alt={product.title} />

      <div className={classes.details}>
        <h2>{product.title}</h2>
        <h2>{product.description}</h2>
        <p>$ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
