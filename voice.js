const guessElement = document.getElementById('fala');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();


recognition.addEventListener('result', speak)

function speak(e) {
    console.log(e)
    guess = e.results[0][0].transcript
    transcriptSpeak(guess)
}


function transcriptSpeak(guess) {
    guessElement.innerHTML = `
        <div>Você falou:</div>
        <span>${guess}</span>
    `
}