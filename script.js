let Menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

Menu.addEventListener("click", function () {
    navlist.classList.toggle("active");
});

window.onscroll = () => {
    navlist.classList.remove("active");
};
/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');
let services = document.querySelector('#services');
let contacts = document.querySelector('#contacts');
let nav = document.querySelector('.navlist');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    services.classList.toggle('dark-mode2');
    contacts.classList.toggle('dark-mode2');
    nav.classList.toggle('dark-mode3');
};

