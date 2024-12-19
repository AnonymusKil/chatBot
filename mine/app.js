const showBot = document.getElementById("displayChat");
const closeBot = document.getElementById("closeChat");
const mainStuff = document.getElementById("chat");

function getChatAndDisplay() {
    mainStuff.style.display = "flex";  // Show chat
    setTimeout(() => {
        mainStuff.classList.add("show-chat");  // Add the animation class
    }, 10);  // A small delay to ensure the display change is registered
}

function getChatAndHide() {
    mainStuff.classList.remove("show-chat");  // Remove the animation class
    setTimeout(() => {
        mainStuff.style.display = "none";  // Hide the chat after animation
    }, 500);  // Match the duration of the animation
}

// Add event listeners for the buttons
showBot.addEventListener("click", getChatAndDisplay);
closeBot.addEventListener("click", getChatAndHide);