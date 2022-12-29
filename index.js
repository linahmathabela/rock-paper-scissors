//grab elements
let playerChoice = "";
let computerChoice = "";
const playerChoiceContainer = document.querySelector('#player-choice-container');
const gameResultMessageElement = document.querySelector("#game-result-message");
let gameResultMessage = "";

//player slection
playerChoiceContainer.addEventListener('click', handlePlayerChoice);

function handlePlayerChoice(event) {
    //logic to handle players choice
    if (!event.target.classList.contains('emoji'))
    return;
    playerChoice = event.target.textContent;
    playerChoiceContainer.innerHTML = `<p class="emoji">
    ${playerChoice}</p>`;
    clearInterval(shuffleIntervalID);
    determineGameWinner()
}

//computer selection
const emojis = ["🪨", "📄", "✂️ "];
let currentEmojiNumber = 0;
const emojiShuffleElement = document.querySelector("#emoji-shuffle");
const shuffleIntervalID = setInterval(shuffleEmojis, 150);

function shuffleEmojis() {
    computerChoice = emojis[currentEmojiNumber];
    emojiShuffleElement.textContent = computerChoice;

    if (currentEmojiNumber < emojis.length - 1) {
        currentEmojiNumber++;
    } else {
        currentEmojiNumber = 0;
    }
}

//decide winner
function determineGameWinner() {
    const gameResultMessageElement = document.querySelector("#game-result-message");
    let gameResultMessage = "";

    if (playerChoice === computerChoice) {
        gameResultMessage = "It's a tie!";
        // Note the extra space in the scissors emoji!
    } else if (playerChoice === "🪨" && computerChoice === "✂️ ") {
        gameResultMessage = "Player wins!";
    } else if (playerChoice === "📄" && computerChoice === "🪨") {
        gameResultMessage = "Player wins!";
    } else if (playerChoice === "✂️ " && computerChoice === "📄") {
        gameResultMessage = "Player wins!";
    } else {
        gameResultMessage = "Computer wins!";
    }
    gameResultMessageElement.textContent = gameResultMessage + " Refresh to play again!";
}
