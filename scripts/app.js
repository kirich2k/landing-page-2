const main = document.getElementById("main");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

let openMenu = () => {
    if (
        burger?.classList[2] !== "-active" &&
        menu?.classList[2] === "-disabled" &&
        menu?.classList[1] !== "-fixed"
    ) {
        burger.classList.add("-active");
        menu.classList.remove("-disabled");
        menu.classList.add("-active");
        main.classList.add("-fixed");
    } else {
        burger.classList.remove("-active");
        menu.classList.remove("-active");
        menu.classList.add("-disabled");
        main.classList.remove("-fixed");
    }
};
