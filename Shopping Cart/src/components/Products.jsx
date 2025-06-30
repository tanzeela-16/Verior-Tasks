import React from 'react';
import styles from './styles/Products.module.css';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Headphones', price: 80, image: 'images/headphones.webp' },
  { id: 2, name: 'Watch', price: 120, image: 'images/watch.webp' },
  { id: 3, name: 'Shoes', price: 90, image: 'images/shoes.jpg' },
  { id: 4, name: 'Bag', price: 60, image: 'images/bag.webp' },
];

const Products = () => {
  return (
    <div className={styles.products}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
