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
let maxwrong = 7;
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
    let buttonsHTML = "abcdefghijklmnopqrestuvwxyz".split('').map(letter =>
        `
        <button
        class = "btn btn-lg btn-primary m-2" id = '` + letter + `' onClick ="handleGuess('` + letter + `')">
        ` + letter + `
        </button>
        `).join("");
    document.getElementById("keyboard").innerHTML = buttonsHTML;
}
    document.getElementById("maxwrong").innerHTML= maxwrong;


randomWord();
generateButtons();
guessedWord();