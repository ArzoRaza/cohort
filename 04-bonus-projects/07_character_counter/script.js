const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const wordCount = document.getElementById("word-count"); // New element for unique word count
const maxLimit = 150;

textInput.addEventListener("input", () => {
    let currentLength = textInput.value.length;

    let words = textInput.value
        .toLowerCase()
        .match(/\b\w+\b/g) || [];

    let uniqueWords = new Set(words);

    if (currentLength >= maxLimit) {
        charCount.textContent = `You have reached ${maxLimit} characters`;
        charCount.classList.add("limit-exceeded");
        textInput.setAttribute("readonly", true);
    } else {
        charCount.textContent = `${currentLength} / ${maxLimit} characters`;
        charCount.classList.remove("limit-exceeded");
        textInput.removeAttribute("readonly"); 
    }

    wordCount.textContent = `Unique words: ${uniqueWords.size}`;
});
