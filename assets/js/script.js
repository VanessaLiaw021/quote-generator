//Query Selectors 
const body = document.querySelector("body");
const button = document.querySelector("button");
const quote = document.querySelector("#quote");
const quoteId = document.querySelector("#quote-id");
const author = document.querySelector("#author");

//Function that fetch advice from API 
const getRandomQuote = () => {

    //Fetch the quotes from API 
    fetch("http://api.quotable.io/random")
        .then(response => response.json())
        .then(results => () => {

            quoteId.innerText = results._id;
            quote.innerText = results.content;
            author.innerText = results.author;
        });
};

//Function that generate a random color when button is clicked 
const changeColor = () => {

    //Variables 
    let symbol = "0123456789ABCDEF";
    let color = "#";

    //Loop through the color to generate a random color 
    for (let i = 0; i < 6; i++) {

        //Combine the color and symbol to generate random colors 
        color += symbol[Math.floor(Math.random() * 16)];
    }

    //Set the body to change the background color
    document.body.style.backgroundColor = color;

    //Set the background color of button to change as color in background
    button.style.backgroundColor = color;
};

//Add an event listener for when clicked, it will generated a new advice each time 
button.addEventListener("click", () => {

    //Call the function to display the advice
    getRandomQuote();

    //Call the function to change background color
    changeColor();
});

body.addEventListener("load", changeColor());