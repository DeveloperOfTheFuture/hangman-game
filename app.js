const wordEl = document.querySelector('#word');
const wrongLettersEl = document.querySelector('#wrong-letters');
const playAgainBtn = document.querySelector('#play-again');
const popup = document.querySelector('#popup-container');
const notification = document.querySelector('#notification-container');
const finalMessage = document.querySelector('#final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['react', 'vue', 'angular', 'vanilla'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show word
function displayWord() {
  wordEl.innerHTML = `${selectedWord.split('').map(letter => `
    <span class="letter">${correctLetters.includes(letter) ? letter : ''}
    </span>`)
    .join('')}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.textContent = 'Congratulations! You won';
    popup.style.display = 'flex';
  }
}

displayWord();