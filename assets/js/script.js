//Query Selectors 
const button = document.querySelector("button");
const advice = document.querySelector("#advice");
const adviceId = document.querySelector("#advice-id");

//Function that fetch advice from API 
const fetchAPI = async () => {

    //Variable that get the advice from API 
    const fetch = await fetch("https://api.adviceslip.com/advice");

    //Get the data from API and return as a json file 
    const data = await res.json();

    //Grab the properties from the JSON properties 
    const adviceUniqueId = data.slip.id;
    const displayAdvice = data.slip.advice;

    //Display the quote on the html page 
    adviceId.innerText = `#${adviceUniqueId}`;
    advice.innerText = `"${displayAdvice}"`;
};

//Function that generate a random color when button is clicked 
const changeColor = () => {

    //Variables 
    const symbol = "0123456789ABCDEF";
    const color = "#";

    //Loop through the color to generate a random color 
    for (let i = 0; i < 6; i++) {

        //Combine the color and symbol to generate random colors 
        color += symbol[Math.floor(Math.random() * 16)];
    }

    //Set the body to change the background color
    document.body.style.backgroundColor = color;
};

//Add an event listener for when clicked, it will generated a new advice each time 
button.addEventListener("click", () => {

    //Call the function to display the advice
    fetchAPI();

    //Call the function to change background color
    changeColor();
});