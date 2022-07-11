const main = document.getElementById("main");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

let openMenu = () => {
    if (
        burger?.classList[1] !== "_active" &&
        menu?.classList[1] === "_disabled" &&
        menu?.classList[1] !== "_fixed"
    ) {
        burger.classList.add("_active");
        menu.classList.remove("_disabled");
        menu.classList.add("_active");
        main.classList.add("_fixed");
    } else {
        burger.classList.remove("_active");
        menu.classList.remove("_active");
        menu.classList.add("_disabled");
        main.classList.remove("_fixed");
    }
};
