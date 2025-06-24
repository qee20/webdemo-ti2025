// Format angka ke dalam format Rupiah
function formatRupiah(amount) {
  return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Ambil data order dari localStorage (atau fallback ke dummy data)
const orderItems = getOrderItemsFromLocalStorage() || [
  { id: 'prd001', name: 'Mechanical Keyboard X100', price: 768999, qty: 1 },
  { id: 'prd002', name: 'ProGaming Mouse Z5', price: 245999, qty: 2 },
  { id: 'prd003', name: 'Surround Sound Headset H7', price: 1489500, qty: 1 }
];

// Fungsi menghitung total harga dari semua item
function calculateTotal() {
  return orderItems.reduce((total, item) => total + (item.price * item.qty), 0);
}

// Tangani submit form
document.getElementById('customerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const customerData = {
    fullName: document.getElementById('fullName').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    address: document.getElementById('address').value.trim()
  };

  // Validasi sederhana (opsional tambahan)
  if (!customerData.fullName || !customerData.email || !customerData.phone || !customerData.address) {
    alert("Please fill in all the fields.");
    return;
  }

  // Tampilkan invoice
  generateInvoice(customerData);

  // Sembunyikan form dan tampilkan invoice
  document.getElementById('customerForm').style.display = 'none';
  document.getElementById('invoiceContainer').style.display = 'block';
});

// Generate invoice dari data customer dan cart
function generateInvoice(customerData) {
  // Isi info customer
  document.getElementById('invoiceName').textContent = customerData.fullName;
  document.getElementById('invoiceEmail').textContent = customerData.email;
  document.getElementById('invoicePhone').textContent = customerData.phone;
  document.getElementById('invoiceAddress').textContent = customerData.address;

  // Tanggal & nomor order
  const now = new Date();
  document.getElementById('invoiceDate').textContent = `Date: ${now.toLocaleDateString()}`;
  document.getElementById('invoiceNumber').textContent = `Order #${generateOrderNumber()}`;

  // Daftar item pesanan
  const itemsContainer = document.getElementById('invoiceItems');
  itemsContainer.innerHTML = '';

  orderItems.forEach(item => {
    const itemTotal = item.price * item.qty;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${formatRupiah(item.price)}</td>
      <td>${item.qty}</td>
      <td class="text-right">${formatRupiah(itemTotal)}</td>
    `;
    itemsContainer.appendChild(row);
  });

  // Total harga
  document.getElementById('invoiceTotal').textContent = formatRupiah(calculateTotal());
}

// Fungsi membuat nomor order acak
function generateOrderNumber() {
  const random = Math.floor(Math.random() * 900000 + 100000); // 6 digit
  return random;
}

// Ambil data dari localStorage (keranjang belanja)
function getOrderItemsFromLocalStorage() {
  const data = localStorage.getItem('cart');
  if (data) {
    try {
      const cart = JSON.parse(data);
      return cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        qty: item.qty
      }));
    } catch (error) {
      console.error("Invalid cart data in localStorage");
      return null;
    }
  }
  return null;
}