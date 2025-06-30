import React from 'react';
import styles from './styles/CartSidebar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  closeCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../redux/cart/cartSlice';
import { FaTimes, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const CartSidebar = () => {
  const dispatch = useDispatch();
  const { cartItems, isCartOpen } = useSelector(state => state.cart);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`${styles.cartSidebar} ${isCartOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <h2>My Cart</h2>
        <FaTimes
          className={styles.closeIcon}
          onClick={() => dispatch(closeCart())}
        />
      </div>

      {cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty!</p>
      ) : (
        <div className={styles.itemsContainer}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h4 className={styles.itemName}>{item.name}</h4>
                <p className={styles.itemPrice}>${item.price}</p>
                <div className={styles.quantityControls}>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    <FaPlus />
                  </button>
                </div>
              </div>
              <FaTrash
                className={styles.removeIcon}
                onClick={() => dispatch(removeFromCart(item.id))}
              />
            </div>
          ))}
        </div>
      )}

      <div className={styles.footer}>
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
        <button className={styles.checkoutButton}>Proceed</button>
      </div>
    </div>
  );
};

export default CartSidebar;
