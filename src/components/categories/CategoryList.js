import React from "react";

import CategoryItem from "./CategoryItem";
import classes from "./CategoryList.module.css";

const CategoryList = ({ categories }) => {
  return (
    <div>
      <h1 className={classes["list-heading"]}>Categories</h1>

      <div className={classes.list}>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
