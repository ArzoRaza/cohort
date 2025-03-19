const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyQuoteBtn = document.getElementById("copy-quote");
const shareTwitterBtn = document.getElementById("share-twitter");
const exportQuoteBtn = document.getElementById("export-quote");

const fetchQuote = async () => {
    try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");
        const data = await response.json();
        if (data.success) {
            const quote = data.data.content;
            const author = data.data.author;
            quoteEl.textContent = `"${quote}"`;
            authorEl.textContent = `- ${author}`;
            setRandomBackground(); 
        } else {
            quoteEl.textContent = "Failed to fetch quote. Please try again.";
            authorEl.textContent = "";
        }
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteEl.textContent = "An error occurred. Please try again.";
        authorEl.textContent = "";
    }
};

const setRandomBackground = () => {
    const images = [
        "url('https://picsum.photos/1600/900?random=1')",
        "url('https://picsum.photos/1600/900?random=2')",
        "url('https://picsum.photos/1600/900?random=3')",
        "url('https://picsum.photos/1600/900?random=4')",
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = randomImage;
};

copyQuoteBtn.addEventListener("click", () => {
    const quoteText = quoteEl.textContent + " " + authorEl.textContent;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert("Quote copied to clipboard!");
    });
});

shareTwitterBtn.addEventListener("click", () => {
    const quoteText = encodeURIComponent(quoteEl.textContent + " " + authorEl.textContent);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText}`;
    window.open(twitterUrl, "_blank");
});

exportQuoteBtn.addEventListener("click", () => {
    const quoteBox = document.querySelector(".quote-box");
    html2canvas(quoteBox, {
        useCORS: true, 
        logging: true, 
    })
    .then((canvas) => {
        const link = document.createElement("a");
        link.download = "quote.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    })
    .catch((error) => {
        console.error("Error exporting quote as image:", error);
        alert("Failed to export quote as image. Please try again.");
    });
});

newQuoteBtn.addEventListener("click", fetchQuote);

fetchQuote();