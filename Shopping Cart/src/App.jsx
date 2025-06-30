import React from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CartSidebar from './components/CartSidebar';
import { useSelector } from 'react-redux';

function App() {
  const isCartOpen = useSelector(state => state.cart.isCartOpen);

  return (
    <div>
      <Navbar />
      <div className={`${styles.mainContent} ${isCartOpen ? styles.cartOpen : ''}`}>
        <Products />
        <CartSidebar />
      </div>
    </div>
  );
}

export default App;
