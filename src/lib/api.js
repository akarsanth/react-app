import products from "../data/products";
import categories from "../data/categories";

export const getAllProducts = async () => {
  return products;
};

export const getProductById = async (id) => {
  const product = products.find((product) => product.id === parseInt(id));

  return product;
};

export const getAllCategories = async () => {
  return categories;
};

export const getProductsByCategory = async (categoryId) => {
  const categoryProducts = products.filter(
    (product) => product.categoryId === parseInt(categoryId)
  );

  const category = categories.find(
    (category) => category.id === parseInt(categoryId)
  );
  return { products: categoryProducts, category };
};
