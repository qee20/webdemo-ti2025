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

let cart = []

const productsGrid = document.getElementById('productsGrid')
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const resetCartBtn = document.getElementById('resetcart');

document.addEventListener('DOMContentLoaded', function () {
    renderProductList()
    loadFromLocalStrg()
    renderCart()
})

function renderProductList() {
    productsGrid.innerHTML = ''

    products.forEach(product => {
        const productCard = document.createElement('div')
        productCard.className = 'product-card'
        productCard.innerHTML = `
        <h3>${product.name}</h3>
        <img src=${product.imgfile}>
        <p class="product-price">${formatRupiah(product.price)}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productsGrid.appendChild(productCard)
    })

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart)
    })
}

function addToCart(e) {
   //Yeet!
   console.log("Yeet");
}


function renderCart(){
    //Yeet!
   console.log("Yeet");
}

function saveToLocalStrg() {
    //Yeet!
   console.log("Yeet");
}

function loadFromLocalStrg() {
    //Yeet!
   console.log("Yeet");
}

resetCartBtn.addEventListener('click', function(){
    //Yeet!
   console.log("Yeet");
})

function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
}
