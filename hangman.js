var programmingLaunguages = [
    "python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
	"ruby"
]

let answers = '';
let maxwrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord(){
    answers = programmingLaunguages[Math.floor(Math.random()*programmingLaunguages.length)];
}

function guessedWord(){
    wordStatus = answers.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById("wordSpotlight").innerHTML = wordStatus;
}





function generateButtons(){
    let buttonsHTML = "qwertyuiopasdfghjklzxcvbnm".split('').map(letter =>
        `
        <button
        class = "keys btn btn-lg btn-primary m-2" id = '` + letter + `' onClick ="handleGuess('` + letter + `')">
        ` + letter + `
        </button>
        `).join("");
    document.getElementById("keyboard").innerHTML = buttonsHTML;
}
    document.getElementById("maxwrong").innerHTML= maxwrong;



function handleGuess(choseLetter){
        guessed.indexOf(choseLetter) == -1 ? guessed.push(choseLetter): null;
        document.getElementById(choseLetter).setAttribute('disabled', true)
    
        if(answers.indexOf(choseLetter) >= 0){
            guessedWord();
            checkifWon();
        }else if(answers.indexOf(choseLetter) === -1){
            mistakes++;
            updateMistakes();
            checkIfLost();
            updateHangmanPic();
        }
    }

function updateHangmanPic(){
    document.getElementById('hangmanpic').src = './images/'+ mistakes +'.jpg';
}

function checkIfLost(){
    if(mistakes === maxwrong){
        document.getElementById('keyboard').innerHTML = "Sorry, You Lost try again..."
        document.getElementById('wordSpotlight').innerHTML = "The answer was "+ answers;
    }
}


function checkifWon(){
    if(answers === wordStatus){
        document.getElementById('keyboard').innerHTML = "Awesome, You Won !!!"
    }
}

function updateMistakes(){

    document.getElementById('mistakes').innerHTML = mistakes;
}

function reset(){
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanpic').src = './images/0.jpg';
    

    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}


randomWord();
generateButtons();
guessedWord();

