// Format Rupiah
function formatRupiah(amount) {
  return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Ambil data dari localStorage yang disimpan waktu checkout
const orderItems = JSON.parse(localStorage.getItem('checkoutCart')) || [];

// Hitung total pesanan
function calculateTotal() {
  return orderItems.reduce((total, item) => total + (item.price * item.qty), 0);
}

// Proses ketika form dikirim
document.getElementById('customerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Ambil data customer
  const customerData = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value
  };

  // Tampilkan invoice
  generateInvoice(customerData);

  // Sembunyikan form, tampilkan invoice
  document.getElementById('customerForm').style.display = 'none';
  document.getElementById('invoiceContainer').style.display = 'block';
});

// Fungsi tampilkan invoice
function generateInvoice(customerData) {
  // Info pelanggan
  document.getElementById('invoiceName').textContent = customerData.fullName;
  document.getElementById('invoiceEmail').textContent = customerData.email;
  document.getElementById('invoicePhone').textContent = customerData.phone;
  document.getElementById('invoiceAddress').textContent = customerData.address;

  // Tanggal dan nomor order
  const now = new Date();
  document.getElementById('invoiceDate').textContent = `Date: ${now.toLocaleDateString()}`;
  document.getElementById('invoiceNumber').textContent = `Order #${Math.floor(Math.random() * 1000000)}`;

  // Daftar barang
  const itemsContainer = document.getElementById('invoiceItems');
  itemsContainer.innerHTML = '';

  orderItems.forEach(item => {
    const row = document.createElement('tr');
    const itemTotal = item.price * item.qty;

    row.innerHTML = `
      <td>${item.name}</td>
      <td>${formatRupiah(item.price)}</td>
      <td>${item.qty}</td>
      <td class="text-right">${formatRupiah(itemTotal)}</td>
    `;

    itemsContainer.appendChild(row);
  });

  // Total keseluruhan
  document.getElementById('invoiceTotal').textContent = formatRupiah(calculateTotal());
}
