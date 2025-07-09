

function formatRupiah(amount) {
    return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

const orderItems = loadOrderFromLocalStrong();

// Calculate order total
function calculateTotal(finalchoize) {
    return orderItems.reduce((total,item)=> total +(item.price * item.qty), 0);
}

functionloadOrderFromLocalStrorage();{const data = localStorage.getItem('cart')
    return data ?  JSON.parse(data) : [];
    document.getElementById('customerForm').addEventListener('submit', function (e) {
   e.preventDefault()
    })};
    



// Handle form submission
const customerData = {fullName:
    document.getElementById('fullName').value,
    email:
    document.getElementById('email').value,
    phone:
    document.getElementById('phone').value,
    address:
    document.getElementById('address').value
};







// Generate invoice function
function generateInvoice(customerData) {
    document.getElementById('invoiceName').textContent = customerData.fullName;
    document.getElementById('invoiceEmail').textContent = customerData.email;
    document.getElementById('invoicePhone').textContent = customerData.phone;
    document.getElementById('invoiceAddress').textContent = customerData.address;
}