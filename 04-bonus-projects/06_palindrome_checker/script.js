const inputText = document.getElementById("inputText");
const checkButton = document.getElementById("checkButton");
const resultMessage = document.getElementById("resultMessage");
const reversedText = document.getElementById("reversedText");

// Check palindrome when the user types
inputText.addEventListener("input", checkPalindrome);

// not needed while above methods works
// checkButton.addEventListener("click", checkPalindrome);

function checkPalindrome() {
    const text = inputText.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseText = text.split("").reverse().join("");

    reversedText.textContent = `Reversed: ${reverseText}`; 

    if (text === reverseText) {
        resultMessage.textContent = `"${inputText.value}" is a Palindrome! ✅`;
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = `"${inputText.value}" is NOT a Palindrome ❌`;
        resultMessage.style.color = "red";
    }
}
