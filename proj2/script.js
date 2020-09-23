const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

const magic = (element,color) => {
    return element.addEventListener("mouseenter",() => {
        center.style.background = color;
    });
};

magic(red,getBGColor(red));
magic(cyan,getBGColor(cyan));
magic(violet,getBGColor(violet));
magic(orange,getBGColor(orange));
magic(pink,getBGColor(pink));