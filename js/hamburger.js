const menuButton = document.querySelector(".menu_button")
const menu = document.querySelector(".burgernav")

menuButton.addEventListener('click', showMenu)

function showMenu() {
    menu.classList.toggle('OnScreen')
}