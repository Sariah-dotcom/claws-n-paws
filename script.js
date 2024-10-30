// Card effect
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

// Menu slide in
const menu = document.getElementById('menu');
const menuItems = document.getElementById('menu-items');

menu.addEventListener('click', () => {
    menuItems.style.display = 'block';
    menuItems.style.opacity = '1';
});

