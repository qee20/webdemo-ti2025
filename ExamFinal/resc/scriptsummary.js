

function formatRupiah(amount) {
    return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Calculate order total
function calculateTotal(finalchoize) {
    
}

// Handle form submission
document.getElementById('customerForm').addEventListener('submit', function (e) {
   
});

// Generate invoice function
function generateInvoice(customerData) {
   
}

@param {number} amount
@returns {string}
function formatRupiah(amount)
return'Rp' + amount.toString().replace(/\B(?=(d{3})+(?!d))/g, '.');