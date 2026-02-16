const sliderVerde = document.getElementById("sliderVerde");
const sliderRojo = document.getElementById("sliderRojo");

const seccionVerde = document.querySelector(".verde");
const seccionRojo = document.querySelector(".rojo");

const hexVerde = document.getElementById("hexVerde");
const hexRojo = document.getElementById("hexRojo");

function toHex(value) {
    let hex = parseInt(value).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

sliderVerde.addEventListener("input", function () {
    let verde = sliderVerde.value;
    let color = "#00" + toHex(verde) + "00";
    seccionVerde.style.backgroundColor = color;
    hexVerde.textContent = color.toUpperCase();
});

sliderRojo.addEventListener("input", function () {
    let rojo = sliderRojo.value;
    let color = "#" + toHex(rojo) + "0000";
    seccionRojo.style.backgroundColor = color;
    hexRojo.textContent = color.toUpperCase();
});
