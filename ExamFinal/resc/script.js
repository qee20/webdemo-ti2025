const addOnProducts = [
    { id: 1, name: 'Mechanical Keyboard X100', price: 768999, imgfile: './images/keyboardx100.webp' },
    { id: 2, name: 'Ajazz Kriyo MX22', price: 245999, imgfile: './images/mouseajazz.webp' },
    { id: 3, name: 'Game Controller Rossevelt V', price: 378000, imgfile: './images/controllerxg56.jpg' },
    { id: 4, name: 'Steelseries Arctics', price: 1489500, imgfile: './images/arctics.jpg' },
    { id: 5, name: 'Gaming Chair M23', price: 3125000, imgfile: './images/chair.png' },
    { id: 6, name: 'Edifier Speaker BV90', price: 5238789, imgfile: './images/speaker.png' },
    { id: 6, name: 'Kiip Laptop Stand Usb Hub', price: 820999, imgfile: './images/laptopstand.webp' },
]

const featuredProduct = [
    { id: 'fp01', name: 'HP OMEN 17 2024', price: 54999000, imgfile: './images/omenfront.png' },
    { id: 'fp02', name: 'Lenovo Legion 9i Gen 10 (18″ Intel)', price: 72000000, imgfile: './images/lenovolegion.avif' },
    { id: 'fp03', name: 'ROG Flow X13 (2023) GV302', price: 20350000, imgfile: './images/rogx13.webp' },
    { id: 'fp04', name: 'ROG Flow Z13 (2025) GZ302', price: 48789000, imgfile: './images/rogz13.png' },
    { id: 'fp05', name: 'MSI Titan 18 HX', price: 67980000, imgfile: './images/msi.avif' },
]

let selectedProduct = null

function displayFeaturedProduct() {
    const productContainer = document.getElementById('theproducts')
    productContainer.innerHTML = ''

    
    document.querySelectorAll('.catbtn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            selectedProduct = featuredProduct.find(p => p.id === productId);
            
            localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
            
            window.location.href = './addon.html';
        });
    });
}

function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}


window.addEventListener('DOMContentLoaded', displayFeaturedProduct);