import React from "react";
import "../index.css";

const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id} className="product-card">
          <strong>{product.title}</strong>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
