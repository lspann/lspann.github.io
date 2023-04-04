const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

// const  answerbutton = document.querySelector("js-tweet");
// answerButton.addEventListener('click', showAnswer);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

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

       showAnswer(json.answer);
    }
    catch (err) {
        consolde.log(err);
        alert('Failed to fetch new trivia');
    }
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