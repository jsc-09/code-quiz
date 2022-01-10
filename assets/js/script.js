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
let questionEl = document.getElementById('question');
let answerButtonEl = document.getElementById('answer-buttons');
let currentQuestion = 0;
let correctWrong = document.getElementById('correct-wrong');
let scoreContainer = document.querySelector('.score-container');
let timeLeft;
let timeInterval;
let timerDisplay = document.querySelector(".timer-display")

startButton.addEventListener("click", startGame) 
/*Array.from(answerButtonEl.children).forEach(button => {
    button.addEventListener('click',selectAnswer)
});*/
function countdown() {
    timeLeft = 100;
    //set timer countdown
    timeInterval = setInterval(function (){
        timeLeft--;
        timerDisplay.textContent = timeLeft;
    }, 1000);

    //timer stop for last question answered
}

console.log(countdown)

function startGame() {
    //console.log("Game started!");
    introContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    reset();
    showQuestion();
    countdown();
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
    
/* Array.from(answerButtonEl.children).forEach(button => {
        button.innerText = questions[currentQuestion].answers[i].text;
        i++;
    })*/
}

function reset() {
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild)
    }
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
        //subtract 10 seconds 
    }

    if (currentQuestion < questions.length-1) {
        currentQuestion++;
        reset();
        showQuestion()
    }  
    else {
        reset();
        questionContainer.classList.add('hide');
        scoreContainer.classList.remove('hide');
        //display score-container
    }
  
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