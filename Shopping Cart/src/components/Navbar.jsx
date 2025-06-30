import React from 'react';
import styles from './styles/Navbar.module.css';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../redux/cart/cartSlice';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>My Shop</h1>
      <div className={styles.cartIcon} onClick={() => dispatch(toggleCart())}>
        <FaShoppingCart size={22} />
        <span className={styles.badge}>Cart</span>
      </div>
    </nav>
  );
};

export default Navbar;
