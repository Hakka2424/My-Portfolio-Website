//Typewriter effect
const texts = ["DEVELOPER", "GAMER", "COLLECTOR"];
let speed = 100;
let textIndex = 0;
let charIndex = 0;

const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
    if (!textElement) return; // Makes element exists
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.textContent.length > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.addEventListener("load", typeWriter);
