// Get the necessary elements from the HTML
var countoflikes1 = document.getElementById("likes1")
var changebutton1 = document.getElementById("like-button1")

// Define the initial number
let likes1 = parseInt(countoflikes1.textContent);

// Function to handle the button click event
function changeNumber1() {
    // Increment the number
    likes1++;
    // Update the number in the HTML
    countoflikes1.textContent = likes1;
}

// Get the necessary elements from the HTML
var countoflikes2 = document.getElementById("likes2")
var changebutton2 = document.getElementById("like-button2")

// Define the initial number
let likes2 = parseInt(countoflikes2.textContent);

// Function to handle the button click event
function changeNumber2() {
    // Increment the number
    likes2++;
    // Update the number in the HTML
    countoflikes2.textContent = likes2;
}

// Get the necessary elements from the HTML
var countoflikes3 = document.getElementById("likes3")
var changebutton3 = document.getElementById("like-button3")

// Define the initial number
let likes3 = parseInt(countoflikes3.textContent);

// Function to handle the button click event
function changeNumber3() {
    // Increment the number
    likes3++;
    // Update the number in the HTML
    countoflikes3.textContent = likes3;
}




// SEGUN CHAT GPT ERA ALGO ASI (NO FUNCIONO):

// // Get the necessary elements from the HTML
// var countoflikes = document.querySelectorAll(".likes")
// var changebutton = document.querySelectorAll(".like-button")

// // Define the initial number
// let likes = parseInt(countoflikes.textContent);

// // Function to handle the button click event
// function changeNumber(event) {
//       // Get the index of the clicked button
//     var buttonIndex = Array.from(changebutton).indexOf(event.target);
//       // Get the corresponding number element and its current value
//     var countoflikes = countoflikes[buttonIndex];
//     let likes = parseInt(countoflikes.dataset.value);
//     // Increment the number
//     likes++;
//     // Update the number in the HTML
//     countoflikes.textContent = likes;
//     countoflikes.dataset.value = likes;
// }

// // Attach the click event listener to each button
// changebutton.forEach(button => {
//     button.addEventListener("click", changeNumber);
// });

