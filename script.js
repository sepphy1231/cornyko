// Typing Effect for Header Message
const message = "Happy Motmot My Love";
let index = 0;

function typeMessage() {
    if (index < message.length) {
        document.getElementById("typingMessage").textContent += message.charAt(index);
        index++;
        setTimeout(typeMessage, 150); // Adjust speed by changing the delay (150ms)
    }
}

// Start the typing effect when the page loads
window.onload = typeMessage;

// Message Overlay Functions
const messages = [
    "Hi miss mylove happy motmot to us its our special day i want to make bawi2 this time sorry eto lang muna because i cant laag2 for this day and tomms because naa mi lakaw sorry bawi rako next time if when ka ma free love youu mycornt message nlng muna this time .",
    "always remember miss that you are very special and important to me, i really love you so much since the day that i loved you, its been 9 months and counting im realy still in to you and that will never change i will love you forever and always forever na always pa.",
    "i am always here for you no matter what happeninings in the world misswaswas..",
    "i am sorry miss if sometimes di nako ma pa feel or di nimo ma feel how much i love idk why maybe idk how to express my real feelings for you i am sorry miss for all of my kasalanan to you i but i promise i will be better for you, I LOVEE YOUUU want to hug you rn i miss ysm.",
    "You are my everything forever and always, I love you corntsm."
];

function showMessage(index) {
    const overlay = document.getElementById('messageOverlay');
    const messageText = document.getElementById('messageText');
    messageText.textContent = messages[index - 1];
    overlay.style.display = 'flex';
}

function closeMessage() {
    const overlay = document.getElementById('messageOverlay');
    overlay.style.display = 'none';
}

function goToMemories() {
    window.location.href = "memories.html";
}

// Function to show the clicked image in an overlay
function showImage(src) {
    const overlay = document.getElementById('imageOverlay');
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = src;
    overlay.style.display = 'flex';
}

// Function to close the image overlay
function closeImage() {
    const overlay = document.getElementById('imageOverlay');
    overlay.style.display = 'none';
}
