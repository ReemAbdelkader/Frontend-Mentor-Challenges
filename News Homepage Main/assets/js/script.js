document.addEventListener('DOMContentLoaded', function() {
    const icon_menu = document.querySelector('.icon-menu');
    const icon_close = document.querySelector('.icon-close');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.overlay');
    const body = document.body;


    // open the menu
    icon_menu.addEventListener("click", () => {
        nav.classList.add('active');
        overlay.classList.add('active');
        body.classList.add('menu-open');
        icon_close.style.display = 'block';
        icon_menu.style.display = 'none';
    });

    // close the menu
    function closeMenu() {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
        icon_menu.style.display = 'block';
        icon_close.style.display = 'none';
    }

    icon_close.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
});