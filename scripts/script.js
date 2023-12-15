const burgerButton = document.querySelector('.burger-menu-btn'),
    burgerMenu = document.querySelector('.menu__inner'),
    navList = document.querySelector(`.nav__list`),
    menuItemsSeparator = document.querySelector('.nav__item-separator');

const burger = document.querySelector('.burger');

burgerButton.addEventListener('click', () => {
    toggleClass(burgerMenu, "menu__inner--full-height");
    toggleClass(navList, "visibility-and-opacity--visible");
    addClass(menuItemsSeparator, "display--none");
    toggleClass(burger, "burger--active");
})

function toggleClass (element, classToggled) {
    element.classList.toggle(classToggled);
}

function addClass (element, classAdd) {
    element.classList.add(classAdd);
}

function removeClass (element, classRemoved) {
    element.classList.remove(classRemoved);
}


