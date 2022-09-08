const quoteText = document.querySelector(".quote");
authorName = document.querySelector(".author .name")
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");



function randomQuote(){
    quoteBtn.classList.add("loading");
   quoteBtn.innerText = "Loading Quote...";
   fetch("https://api.quotable.io/random")
   .then(res => res.json())
   .then(result =>{
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");

   
});

}

soundBtn.addEventListener("click",() => {
    // text to speech
    let voice = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(voice);
});

copyBtn.addEventListener("click",() => {
    // copying text
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click",() => {
    // tweet
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText} - ${authorName.innerText}`
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote)