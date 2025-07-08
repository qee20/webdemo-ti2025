

function formatRupiah(amount) {
    return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Calculate order total
function calculateTotal(finalchoize) {
    const order =
    JSON.parsel(localStorage.getItem('orderData'));
}

// Handle form submission
document.getElementById('customerForm').addEventListener('submit', function (e) {
   
});

// Generate invoice function
function generateInvoice(customerData) {
   const order =
   JSON.parsel(localStorage.getItem('orderData'));
}