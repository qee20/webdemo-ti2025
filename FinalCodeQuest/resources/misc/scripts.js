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
const cartItems = document.getElementById('cartItems')
const cartTotal = document.getElementById('cartTotal')
const checkoutBtn = document.getElementById('checkoutBtn')
const resetCartBtn = document.getElementById('resetcart')

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
        `
        productsGrid.appendChild(productCard)
    })

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart)
    })
}

function addToCart(e) {
    const productId = parseInt(e.target.dataset.id)
    const product = products.find(p => p.id === productId)

    const itemInCart = cart.find(item => item.id === product.id)
    if (itemInCart) {
        itemInCart.qty++
    } else {
        cart.push({ ...product, qty: 1 })
    }

    saveToLocalStrg()
    renderCart()
}

function renderCart() {
    cartItems.innerHTML = ''
    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="empty-cart">Keranjang kosong</p>`
        cartTotal.textContent = formatRupiah(0)
        return
    }

    cart.forEach(item => {
        const div = document.createElement('div')
        div.className = 'cart-item'
        div.innerHTML = `
            <p>${item.name} x${item.qty}</p>
            <p>${formatRupiah(item.price * item.qty)}</p>
        `
        cartItems.appendChild(div)
    })

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    cartTotal.textContent = formatRupiah(total)
}

function saveToLocalStrg() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function loadFromLocalStrg() {
    const saved = localStorage.getItem('cart')
    if (saved) {
        cart = JSON.parse(saved)
    }
}

resetCartBtn.addEventListener('click', function () {
    cart = []
    saveToLocalStrg()
    renderCart()
})

// Tombol checkout: arahkan ke halaman invoice
checkoutBtn.addEventListener('click', function () {
    localStorage.setItem('checkoutCart', JSON.stringify(cart))
    window.location.href = 'checkout.html'
})

function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount)
}
