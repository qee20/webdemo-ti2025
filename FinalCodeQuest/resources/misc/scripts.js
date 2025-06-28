const products = [
    { id: 1, name: 'Mechanical Keyboard X100', price: 768999, imgfile: './resources/images/keyboardx100.webp' },
    { id: 2, name: 'ProGaming Mouse Z5', price: 245999, imgfile: './resources/images/mousez5.jpeg' },
    { id: 3, name: 'Game Controller Rossevelt V', price: 378000, imgfile: './resources/images/controllerxg56.jpg' },
    { id: 4, name: 'Steelseries Arctics', price: 1489500, imgfile: './resources/images/arctics.jpg' },
    { id: 5, name: 'Gaming Chair M23', price: 3125000, imgfile: './resources/images/chair.png' },
    { id: 6, name: 'Desk Mat Linq K90', price: 256900, imgfile: './resources/images/deskmat.png' },
    { id: 7, name: 'Stand Headset + Usb Hub', price: 147899, imgfile: './resources/images/headsetstand.png' },
    { id: 8, name: 'Edifier Speaker BV90', price: 5238789, imgfile: './resources/images/speaker.png' },
    { id: 9, name: 'Steelseries Arctics', price: 1489500, imgfile: './resources/images/arctics.jpg' },
    { id: 10, name: 'Electrical Desk Sit Standing MK II', price: 1489500, imgfile: './resources/images/table.png' },
]

const productsGrid = document.getElementById('productsGrid');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalDisplay = document.getElementById('cartTotal');
const resetCartBtn = document.getElementById('resetcart');

let cart = {}; // Format: { productId: { ...productData, qty } }

// Render daftar produk ke halaman
function renderProducts() {
  productsGrid.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.imgfile}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p><strong>Rp${product.price.toLocaleString('id-ID')}</strong></p>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    productsGrid.appendChild(card);
  });
}

// Render isi keranjang ke halaman
function renderCart() {
  cartItemsContainer.innerHTML = '';

  const cartKeys = Object.keys(cart);
  if (cartKeys.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    cartTotalDisplay.textContent = 'Total: Rp';
    return;
  }

  let total = 0;

  cartKeys.forEach(id => {
    const item = cart[id];
    const subtotal = item.price * item.qty;
    total += subtotal;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span class="cart-item-name">${item.name}</span>
      <span class="cart-item-qty">x${item.qty}</span>
      <span class="cart-item-price">$${subtotal.toFixed(2)}</span>
      <button class="cart-item-remove" data-id="${id}" title="Remove item">&times;</button>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  cartTotalDisplay.textContent = `Total: Rp${total.toFixed(2)}`;
}

// Tambah produk ke keranjang
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (cart[productId]) {
    cart[productId].qty += 1;
  } else {
    cart[productId] = { ...product, qty: 1 };
  }

  renderCart();

  // Scroll ke bagian cart agar user langsung lihat update
  const cartElement = document.querySelector('.cart');
  if (cartElement) {
    cartElement.scrollIntoView({ behavior: 'smooth' });
  }
}

// Hapus produk dari keranjang
function removeFromCart(productId) {
  if (cart[productId]) {
    delete cart[productId];
    renderCart();
  }
}

// Kosongkan seluruh keranjang
function resetCart() {
  cart = {};
  renderCart();
}

// Event listener tombol Add to Cart (event delegation)
productsGrid.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.hasAttribute('data-id')) {
    const id = parseInt(e.target.getAttribute('data-id'));
    addToCart(id);
  }
});

// Event listener tombol hapus item di cart (event delegation)
cartItemsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-item-remove')) {
    const id = parseInt(e.target.getAttribute('data-id'));
    removeFromCart(id);
  }
});

// Event listener tombol Clear Cart
resetCartBtn.addEventListener('click', () => {
  resetCart();
});

// Inisialisasi tampilan produk dan cart saat halaman dimuat
renderProducts();
renderCart();