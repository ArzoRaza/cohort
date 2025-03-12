const colorSearch = document.getElementById("colorSearch");
const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");
const complementaryContainer = document.getElementById("complementaryContainer");
const saveColorButton = document.getElementById("saveColorButton");
const favoritesContainer = document.getElementById("favoritesContainer");

colorInput.addEventListener("input", () => {
    const selectedColor = colorInput.value;
    updateColorDisplay(selectedColor);
    showComplementoryColor(selectedColor);
});

colorSearch.addEventListener("input", () => {
    const searchedColor = colorSearch.value.trim();

    if (isValidColor(searchedColor)) {
        colorInput.value = getHexColor(searchedColor); 
        updateColorDisplay(colorInput.value);
        showComplementoryColor(colorInput.value);
    }
});

function updateColorDisplay(color) {
    colorCode.textContent = color;
    colorCode.style.color = color;
}

function showComplementoryColor(color) {
    const complementoryColors = getComplementoryColor(color);
    complementaryContainer.innerHTML = "";

    complementoryColors.forEach((compColor) => {
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = compColor;
        complementaryContainer.appendChild(colorBox);
    });
}

function getComplementoryColor(color) {
    const base = parseInt(color.slice(1), 16);
    const compliment = (0xFFFFFF ^ base).toString(16).padStart(6, "0");
    return [`#${compliment}`];
}

copyButton.addEventListener("click", () => {
    navigator.clipboard
        .writeText(colorCode.textContent)
        .then(() => alert("Color code copied"))
        .catch((err) => console.error("Failed to copy", err));
});

saveColorButton.addEventListener("click", () => {
    const color = colorCode.textContent;
    addFavouriteColor(color);
});

function addFavouriteColor(color) {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = color;
    colorBox.title = color;
    favoritesContainer.appendChild(colorBox);
}

function isValidColor(color) {
    const option = new Option().style;
    option.color = color;
    return option.color !== "";
}

function getHexColor(color) {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = color;
    return ctx.fillStyle;
}
