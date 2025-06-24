const products = [
  { name: 'Wireless Mouse', category: 'electronics' },
  { name: 'Bluetooth Speaker', category: 'electronics' },
  { name: 'Jeans', category: 'clothing' },
  { name: 'T-Shirt', category: 'clothing' },
  { name: 'Harry Potter Book', category: 'books' },
  { name: 'Data Structures Book', category: 'books' },
];

const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const productList = document.getElementById('productList');

function displayProducts(filteredProducts) {
  productList.innerHTML = '';

  if (filteredProducts.length === 0) {
    productList.innerHTML = '<p>No products found.</p>';
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
    `;
    productList.appendChild(card);
  });
}

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  const filtered = products.filter(p => {
    const matchName = p.name.toLowerCase().includes(searchTerm);
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    return matchName && matchCategory;
  });

  displayProducts(filtered);
}

// Event listeners
searchInput.addEventListener('input', filterProducts);
categorySelect.addEventListener('change', filterProducts);

// Initial display
displayProducts(products);
