const quotes = [
    {
        quote: "동해물과 백두산이 마르고 닳도록.",
        author: "안익태",
    },
    {
        quote: "눈물이 차올라서 고갤 들어.",
        author: "IU",
    },
    {
        quote: "다음 강의는? JS로 유튜브 만들고 직접 배포해요.",
        author: "nico",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function printQuote() {
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = todayQuote.quote;
    author.innerText = todayQuote.author;
}
printQuote();
setInterval(printQuote, 1000);
