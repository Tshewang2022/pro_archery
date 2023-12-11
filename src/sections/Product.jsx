import React from "react";
import { products } from "../constants";
import ProductCard from "../components/ProductCard";

const Product = () => {
  return (
    <section className="flex flex-wrap gap-4 justify-center">
      {products.map((product) => (
        <ProductCard key={product.imgURL} {...product} />
      ))}
    </section>
  );
};

export default Product;
