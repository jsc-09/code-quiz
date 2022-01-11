//FIRST: Quiz Instructions + Start Quiz Button 
//SECOND: Once you hit Start Quiz Button, Question will appear with four answers.
//SELECT ANSWER: Requires hover over effect. Each answer will be numbered 1. 2. 3. 4. 
//CORRECT ASNWER will display "Correct!"" with <hr> line separating the question/answers from the alert and go onto the next question
//WRONG ANSWER will display "Wrong!" with <hr> line separating the question/answers from the alert and go onto the next question
//SET TIMER for 100 seconds
//For each WRONG ANSWER, 10 seconds will be DEDUCTED from the timer.
//When quiz is complete, display "ALL DONE" in heading. <p> Your high score: __ // and enter name for submit (input field).
//SUBMIT name will bring a HIGHSCORE list. with options to START OVER or CLEAR SCORES
//NAVIGATION BAR will include View Highscores option and Display Timer

let introContainer = document.querySelector(".intro-container");
let startButton = document.querySelector(".start-btn");
let questionContainer = document.querySelector('.question-container');
let scoreContainer = document.querySelector('.score-container');
let timerDisplay = document.querySelector(".timer-display")
let highscoreForm = document.querySelector('#highscore-form');
let highscoreList = document.querySelector('#highscore-list');
let nameInput = document.querySelector('#name-input');
let restartContainer = document.querySelector('.restart-container');
let submitButton = document.querySelector('.submit-btn')
let highscoreContainer = document.querySelector('.high-score-container')

let questionEl = document.getElementById('question');
let answerButtonEl = document.getElementById('answer-buttons');
let correctWrong = document.getElementById('correct-wrong');
let finalScore = document.getElementById('final-score');
let goHomeBtn = document.getElementById('go-home');
let clearScoreBtn = document.getElementById('clear-score');
let viewHighScoreLink = document.getElementById('view-high-score');

let timeLeft;
let timeInterval;
let currentQuestion = 0;

let highScores = []

//Start Game Button
startButton.addEventListener("click", startGame) 

viewHighScoreLink.addEventListener("click", showHighScoreList );

//Countdown Timer 
function countdown() {
    timeLeft = 100;
    //set timer countdown
    timeInterval = setInterval(function (){
        timeLeft--;
        timerDisplay.textContent = timeLeft;
    }, 1000);
}

console.log(countdown)

//Intro Slide to Start Game
function showIntro() {
    clearAllContainer();
    introContainer.classList.remove('hide')
    reset();
}

//start game
function startGame() {
    //console.log("Game started!");
    clearAllContainer()
    questionContainer.classList.remove('hide');
    reset();
    showQuestion();
    countdown();
    currentQuestion = 0;
}


function showQuestion(){
    //show question
    questionEl.innerText = questions[currentQuestion].question;
    //Show answers in buttons
    questions[currentQuestion].answers.forEach(element => {
        let button = document.createElement('button');
        button.classList.add("answer-btn");
        button.innerText = element.text;
        if (element.correct) {
            button.dataset.correct = element.correct;
        }
        button.addEventListener('click', selectAnswer)
        answerButtonEl.appendChild(button)
    });
}
//reset buttons
function reset() {
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild)
    };
}

function selectAnswer(event) {
//select answer
    console.log(currentQuestion)
    console.log(questions.length)
//if correct, display "Correct!"
    console.log(event.target.innerText)
    console.log(event.target.dataset.correct)

    if (event.target.dataset.correct) {
        correctWrong.textContent = "Correct!";
        correctWrong.classList.add('answer')
    }
//if wrong, display "Wrong!"
    else {
        correctWrong.textContent = "Wrong!";
        
        correctWrong.classList.add('answer')
        timeLeft = timeLeft-10;
    }

    if (currentQuestion < questions.length-1) {
        currentQuestion++;
        reset();
        showQuestion()
    }  
    else {
        //show final score
        reset();
        clearInterval(timeInterval);
        showFinalScore();
    }
}
//SCOREBOARD + NAME INPUT
function showFinalScore(){
    finalScore.textContent = 'Your final score:' + timeLeft;
    clearAllContainer()
    scoreContainer.classList.remove('hide');
    submitButton.addEventListener("click", nameSumbit)
}
//submit name + score
function nameSumbit(submit) {
    submit.preventDefault();
    let nameInput = $('input[name="name-input').val();
    console.log(nameInput);
    console.log(timeLeft);
    //store name and score in local storage
    const scoreItem = {
        name: nameInput,
        score: timeLeft
    }
    highScores.push(scoreItem);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    showHighScoreList()
}
//add event listener for View Highscore 

function showHighScoreList() {
    clearAllContainer()
    highscoreContainer.classList.remove('hide');
    let storedScores = JSON.parse(localStorage.getItem("highScores"));
    console.log("showHighScoreList(): " + storedScores.length)
    resetScores();
    storedScores.forEach(s => {
        console.log("showHighScoreList(): " + s.name)
        console.log("showHighScoreList(): " + s.score)
        let li = document.createElement("li");
        li.textContent = s.name + "..." +s.score;
        highscoreList.appendChild(li)
    })
    goHomeBtn.addEventListener("click", showIntro)
    clearScoreBtn.addEventListener("click", clearScores)
}

//reset high scores
function clearScores() {
    highScores = []
    localStorage.setItem('highScores', JSON.stringify(highScores));
    showHighScoreList()
}

function resetScores() {
    while (highscoreList.firstChild) {
        highscoreList.removeChild(highscoreList.firstChild)
    };
}

function init() {
    let storedScores = JSON.parse(localStorage.getItem("highScores"));
    if (storedScores !==null) {
        highScores = storedScores;
    }
}

function clearAllContainer() {
    introContainer.classList.add('hide');
    questionContainer.classList.add('hide');
    scoreContainer.classList.add('hide');
    highscoreContainer.classList.add('hide')
}

//Each question is an OBJECT
let questions = [
    {
        question: "What is a not common data type?",
        answers: [
            {text: 'function', correct: true},
            {text: 'string', correct: false},
            {text: 'number', correct: false},
            {text: 'boolean', correct: false}
        ]
    },
    {
        question: "Javascript is a _____-side programming language.",
        answers: [
            {text: 'server', correct: false},
            {text: 'client', correct: false},
            {text: 'both', correct: true},
            {text: 'none', correct: false}
        ]
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answers: [
            {text: 'min(x,y)', correct: false},
            {text: 'Math.min(xy)', correct: false},
            {text: 'Math.min(x,y)', correct: true},
            {text: 'min(xy)', correct: false}
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            {text: 'onchange', correct: false},
            {text: 'onmouseover', correct: false},
            {text: 'onmouseclick', correct: false},
            {text: 'onclick', correct: true}
        ]
    },
    {
        question: "Inside which HTML element do we put the Javascript",
        answers: [
            {text: '<scripting>', correct: false},
            {text: '<script>', correct: true},
            {text: '<js>', correct: false},
            {text: '<javascript>', correct: false}
        ]
    }
]

init()