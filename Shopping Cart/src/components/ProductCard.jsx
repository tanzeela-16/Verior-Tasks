import React from 'react';
import styles from './styles/Products.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <h3>{product.name}</h3>
      <p className={styles.price}>${product.price}</p>
      <button
        className={styles.addButton}
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
