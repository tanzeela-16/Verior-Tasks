import React from "react";
import useFetch from "./hooks/useFetch";
import ProductList from "./components/ProductList";
import "./index.css";

function App() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  return (
    <div className="app-container">
      <h1>useFetch Hook Demo</h1>
      <h2>Products</h2>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {data && <ProductList products={data.products} />}
    </div>
  );
}

export default App;
