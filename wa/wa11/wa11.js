const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

// const  answerbutton = document.querySelector("js-tweet");
// answerButton.addEventListener('click', showAnswer);

const endpoint = "https://geek-jokes.sameerkumar.website/api?format=json"
async function getQuote() {
    // console.log("It works!");
    try {
        const response = await fetch(endpoint)
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        // console.log(json.question);
        displayQuote(json.question)
        // console.log(json.answer);

       showAnswer(json.joke);
    }
    catch (err) {
        consolde.log(err);
        alert('Failed to fetch new joke');
    }
}

function changeBgColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function showAnswer(quote) {
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = quote;
}

getQuote();