
function runTypingEffect() {
    const text = 'Hello and Welcome! My name is Preeti Varshney.';
    const typingElement = document.getElementById('typing-text');
    const timeDelay = 100;
    typeText(text, typingElement, timeDelay);
}

function typeText(text, typingElement, timeDelay) {
    for (let i=0; i < text.length; i++) {
        setTimeout(()=>{
            typingElement.textContent += text.charAt(i);
        }, timeDelay* i)
    }
}

window.addEventListener('DOMContentLoaded', runTypingEffect);