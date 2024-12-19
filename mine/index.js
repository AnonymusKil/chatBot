// Get references to the input field, send button, and chat display area
const input = document.getElementById("talkToBot");
const btn = document.getElementById("sendMessage");
const chatPlace = document.getElementById("chatPlace");

/**
 * Function to generate the bot's response based on user input
 * @param {string} userMessage - The message inputted by the user
 * @returns {string} - The bot's reply
 */
function botResponse(userMessage) {
    // Predefined responses for specific user inputs
    const responses = {
        "hello": "Hi there! How can I assist you today? 😊",
        "how are you": "I'm doing great, thanks for asking! 🚀",
        "what is your name": "I'm ChatBuddy, your friendly assistant 🤖.",
        "bye": "Goodbye! See you later! 👋",
        "who created you": "I was created by an awesome developer just like you! 🚀",
        "what can you do": "I can chat with you and answer basic questions. Try 'hello', 'bye', or 'what is your name'!",
    };

    // Default reply if the user's message does not match any key in the responses object
    let reply = "Hello! I'm a bot. How are you today?";

    // Loop through the keys in the responses object
    for (let key in responses) {
        // If the user's message matches one of the keys (case-insensitive), set the bot's reply
        if (userMessage.toLowerCase() === key) {
            reply = responses[key];
            break; // Stop checking other keys once a match is found
        }
    }

    return reply; // Return the bot's reply
}

/**
 * Function to display a message in the chat area (from either the user or the bot)
 * @param {string} message - The message to display
 * @param {string} sender - Identifies the message sender ('user' or 'bot')
 */
function toSendMessage(message, sender) {
    // Create a new div element to hold the message
    const messageElement = document.createElement('div');
    // Apply a different class depending on whether the sender is the user or the bot
    messageElement.classList.add(sender === 'user' ? 'human-side' : 'robots-side');

    // If the message is from the bot, add an icon to the message
    if (sender === 'bot') {
        const iconElement = document.createElement('i'); // Create an icon element
        iconElement.classList.add('ri-robot-2-line'); // Add the robot icon class
        iconElement.style.marginRight = '10px'; // Add some space between the icon and the message text
        messageElement.appendChild(iconElement); // Attach the icon to the message element

        // Call the function to show a notification with the bot's reply
        showNotification(message);
    }

    // Create a paragraph element to hold the text of the message
    const textElement = document.createElement('p');
    textElement.classList.add("message-text"); // Apply a class for styling the message text
    textElement.innerText = message; // Set the text of the message
    messageElement.appendChild(textElement); // Attach the text to the message container

    // Add the message (from user or bot) to the chat display area
    chatPlace.appendChild(messageElement);

    // Automatically scroll the chat area to the bottom so the latest message is visible
    chatPlace.scrollTop = chatPlace.scrollHeight;
}

/**
 * Function to handle user input and display messages for both user and bot
 */
function handleInput() {
    // Get the user's input and remove any extra whitespace
    const getInput = input.value.trim();

    // Check if the input is empty; if it is, alert the user and exit the function
    if (getInput === "") {
        alert("Input can't be empty");
        return; // Stop execution if input is empty
    }

    // Display the user's message in the chat area
    toSendMessage(getInput, 'user');

    // Clear the input field so the user can type a new message
    input.value = '';

    // Generate the bot's reply based on the user's input
    const botReply = botResponse(getInput);

    // Display the bot's message in the chat area
    toSendMessage(botReply, 'bot');
}

/**
 * Function to show a temporary notification when the bot sends a message
 * @param {string} message - The message to display in the notification
 */
function showNotification(message) {
    const notification = document.getElementById('botNotification'); // Get the notification container
    const notificationMessage = document.getElementById('notificationMessage'); // Get the message element inside the notification
    notificationMessage.innerText = message; // Set the text of the notification to the bot's message
    notification.classList.add('show'); // Show the notification by adding the 'show' class

    // Remove the 'show' class after 3 seconds (3000 ms) to hide the notification
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Add an event listener to the "send" button, which triggers the handleInput function when clicked
btn.addEventListener('click',handleInput);
