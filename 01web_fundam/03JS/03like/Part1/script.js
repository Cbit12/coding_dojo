// Get the necessary elements from the HTML
var countoflikes = document.getElementById("likes")
var changebutton = document.getElementById("like-button")

// Define the initial number
let likes = parseInt(countoflikes.textContent);

// Function to handle the button click event
function changeNumber() {
    // Increment the number
    likes++;
    // Update the number in the HTML
    countoflikes.textContent = likes;
}

