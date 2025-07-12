// Format Rupiah
    function formatRupiah(amount) {
      return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    
    // Sample order data (in a real app, this would come from your cart)
    const orderItems = [
      { id: 'prd001', name: 'Mechanical Keyboard X100', price: 768999, qty: 1 },
      { id: 'prd002', name: 'ProGaming Mouse Z5', price: 245999, qty: 2 },
      { id: 'prd003', name: 'Surround Sound Headset H7', price: 1489500, qty: 1 }
    ];
    
    // Calculate order total
    function calculateTotal() {
      return orderItems.reduce((total, item) => total + (item.price * item.qty), 0);
    }
    
    // Handle form submission
    document.getElementById('customerForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const customerData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value
      };
      
      // Generate invoice
      generateInvoice(customerData);
      
      // Hide form and show invoice
      document.getElementById('customerForm').style.display = 'none';
      document.getElementById('invoiceContainer').style.display = 'block';
    });
    
    // Generate invoice function
    function generateInvoice(customerData) {
      // Set customer info
      document.getElementById('invoiceName').textContent = customerData.fullName;
      document.getElementById('invoiceEmail').textContent = customerData.email;
      document.getElementById('invoicePhone').textContent = customerData.phone;
      document.getElementById('invoiceAddress').textContent = customerData.address;
      
      // Set invoice details
      const now = new Date();
      document.getElementById('invoiceDate').textContent = `Date: ${now.toLocaleDateString()}`;
      document.getElementById('invoiceNumber').textContent = `Order #${Math.floor(Math.random() * 1000000)}`;
      
      // Add order items
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
      
      // Set total
      document.getElementById('invoiceTotal').textContent = formatRupiah(calculateTotal());
    }