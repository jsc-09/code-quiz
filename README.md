# code-quiz

Create a code quiz with coding questions using javascript, bootstrap, jquery, css.

The quiz features 5 questions. 
*For every right answer, the quiz moves onto the next question.
*For every wrong answer, the timer goes down 10 seconds and moves onto the next question.

The final score is the number on the timer when the last answer is clicked.

The scoreboard logs highscores using localstorage. 
URL: "https://jsc-09.github.io/code-quiz/"

![Screenshoot of site.](/images/codequiz-sample.png)

Instructions on how the quiz works: 
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

