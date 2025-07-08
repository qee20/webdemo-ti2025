const addOnProducts = [
    { id: 1, name: 'Mechanical Keyboard X100', price: 768999, imgfile: './images/keyboardx100.webp' },
    { id: 2, name: 'Ajazz Kriyo MX22', price: 245999, imgfile: './images/mouseajazz.webp' },
    { id: 3, name: 'Game Controller Rossevelt V', price: 378000, imgfile: './images/controllerxg56.jpg' },
    { id: 4, name: 'Steelseries Arctics', price: 1489500, imgfile: './images/arctics.jpg' },
    { id: 5, name: 'Gaming Chair M23', price: 3125000, imgfile: './images/chair.png' },
    { id: 6, name: 'Edifier Speaker BV90', price: 5238789, imgfile: './images/speaker.png' },
    { id: 7, name: 'Kiip Laptop Stand Usb Hub', price: 820999, imgfile: './images/laptopstand.webp' },
]

// Get the selected product from localStorage
const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
let selectedAddons = [];
const productgrid = document.getElementById("productgrid");
const cartItemcontainer = document.getElementById("cartItemcontainer");
const cartTotaldisplay = document.getElementById("cartTotaldisplay");
const resertCartBtn = document.getElementById("resertCartBtn");
let cart = {};


// Display the selected laptop
function displaySelectedProduct() {
    productgrid.innerHTML = " ";
    addOnProducts.forEach(addOnProducts =>{
        const card = document.createElement("div")
        card.classList.add(addon-checkboxes)
    })   
}

// Display addon checkboxes
function displayAddonProducts() {
    productgrid.innerHTML = " ";
    addOnProducts.forEach(addOnProducts =>{
        const card = document.createElement("div")
        card.classList.add(addon-checkboxes)
    })
   
}

// Update the order summary
function updateOrderSummary() {
    
}

// Confirm order button
document.getElementById('confirm-order')?.addEventListener('click', () => {
    
});

// Format currency (same as in script.js)
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
    displaySelectedProduct();
    displayAddonProducts();
    updateOrderSummary();
});