// Toggle menu for responsive
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Toggle submenu on click (for mobile)
const submenuParents = document.querySelectorAll('.has-submenu > a');

submenuParents.forEach(parentLink => {
    parentLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const submenu = parentLink.nextElementSibling;
            submenu.classList.toggle('active');
        }
    });
});
