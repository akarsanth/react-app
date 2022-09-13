import React from "react";
import { Link } from "react-router-dom";

import classes from "./CategoryItem.module.css";

const CategoryItem = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`}>
      <div className={classes.item}>
        <div className={classes.content}>
          <img src={category.image} alt={category.name} />

          <div className={classes.overlay}>
            <h2>{category.name}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
