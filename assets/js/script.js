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
let timeInterval;
let timerDiplay = document.querySelector("timer-display")

startButton.addEventListener("click", startGame) 
/*Array.from(answerButtonEl.children).forEach(button => {
    button.addEventListener('click',selectAnswer)
});*/
function countdown() {
    let timeLeft = 100;
    timeInterval = setInterval(function (){
        timeLeft--;
    timerDisplay.textContent = timeLeft;
    }, 1000);
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
        correctWrong.textContent = "Correct!"
    }
//if wrong, display "Wrong!"
    else {
        correctWrong.textContent = "Wrong!";
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
        question: "What animal is pink?",
        answers: [
            {text: 'flamingo', correct: true},
            {text: 'fox', correct: false},
            {text: 'elephant', correct: false},
            {text: 'horse', correct: false}
        ]
    },
    {
        question: "What animal has stripes?",
        answers: [
            {text: 'monkey', correct: false},
            {text: 'lion', correct: false},
            {text: 'tiger', correct: true},
            {text: 'rhino', correct: false}
        ]
    },
    {
        question: "What animal has big ears?",
        answers: [
            {text: 'polar bear', correct: false},
            {text: 'penguin', correct: false},
            {text: 'elephant', correct: true},
            {text: 'turtle', correct: false}
        ]
    },
    {
        question: "What animals has a long neck?",
        answers: [
            {text: 'monkey', correct: false},
            {text: 'alligator', correct: false},
            {text: 'leopard', correct: false},
            {text: 'giraffe', correct: true}
        ]
    },
    {
        question: "What is the fastest animal on earth?",
        answers: [
            {text: 'manatee', correct: false},
            {text: 'cheetah', correct: true},
            {text: 'koala', correct: false},
            {text: 'sloth', correct: false}
        ]
    }
]