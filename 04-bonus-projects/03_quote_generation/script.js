const quotes = [
    "The only way to do great work is to love what you do.",
    "First, solve the problem. Then, write the code.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "It’s not that I’m so smart, it’s just that I stay with problems longer.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Don’t compare your beginning to someone else’s middle.",
    "Do what you can, with what you have, where you are.",
    "Simplicity is the soul of efficiency.",
    "Your most unhappy customers are your greatest source of learning.",
    "Dream big. Start small. Act now."
];

const generateBtn = document.getElementById("generateBtn");
const prevBtn = document.getElementById("prevBtn");
const quoteDisplay = document.getElementById("quoteDisplay");
const xShareBtn = document.getElementById("xShare");
const whatsappShareBtn = document.getElementById("whatsappShare");

let availableQuotes = [...quotes]; 
let history = [];
let currentIndex = -1;

function generateQuote() {
    if (availableQuotes.length === 0) {
        availableQuotes = [...quotes]; 
    }

    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    const quote = availableQuotes.splice(randomIndex, 1)[0];

    history.push(quote);
    currentIndex = history.length - 1;

    updateQuote(history[currentIndex]);
    prevBtn.disabled = currentIndex <= 0; 
}

function showPreviousQuote() {
    if (currentIndex > 0) {
        currentIndex--;
        updateQuote(history[currentIndex]);
        prevBtn.disabled = currentIndex <= 0;
    }
}

function updateQuote(quote) {
    quoteDisplay.innerText = `"${quote}"`;

    const text = encodeURIComponent(`"${quote}"`);
    xShareBtn.onclick = () => window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
    whatsappShareBtn.onclick = () => window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
}

generateBtn.addEventListener("click", generateQuote);
prevBtn.addEventListener("click", showPreviousQuote);

generateQuote();
