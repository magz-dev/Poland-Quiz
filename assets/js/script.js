// questions and answers for the quiz
const questions = [
    { question: "What is the capital of Poland?",
        answers: [
            {text:"Warsaw", correct:true},
            {text:"Budapest", correct:false},        
            {text:"Prague", correct:false},
            {text:"Riga", correct:false}]
    },
    { question: "What is the currency unit in Poland?",
        answers: [
            {text:"Zloty", correct:true},
            {text:"Krone", correct:false},        
            {text:"Koruna", correct:false},
            {text:"Euro", correct:false}]
    },
    { question: "Who is the president of Poland?",
        answers: [
            {text:"Viktor Orban", correct:false},        
            {text:"Petr Pavel", correct:false},
            {text:"Andrzej Duda", correct:true},
            {text:"Zoran Milanovic", correct:false}]
    },
    { question: "Which chemical element is named after Poland?",
        answers: [
            {text:"Palladium", correct:false},        
            {text:"Radium", correct:false},
            {text:"Radon", correct:false},
            {text:"Polonium", correct:true}]
    },
    { question: "What's the name of Poland's principal seaport?",
        answers: [
            {text:"Gdynia", correct:false},        
            {text:"Krakow", correct:false},
            {text:"Gdansk", correct:true},
            {text:"Sopot", correct:false}]
    },
    { question: "Which astronomer first formulated a model of the universe that placed the Sun at its center?",
        answers: [
            {text:"Joseph Konrad", correct:false}, 
            {text:"Nicolaus Copernicus", correct:true},       
            {text:"Lech Walesa", correct:false},
            {text:"Frederic Chopin", correct:false}]
    },
    { question: "What is the national animal of Poland?",
        answers: [
            {text:"Otter", correct:false}, 
            {text:"European Bison", correct:true},       
            {text:"Red Deer", correct:false},
            {text:"Lynx", correct:false}]
    },
];

// variables
let currentQuestionIndex = 0;
let score = 0;
const questionText = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const playAgainButton = document.getElementById("play-again");
playAgainButton.addEventListener("click", runGame); // Call the runGame function to restart the quiz



// function to initialize the quiz
function runGame() {
currentQuestionIndex = 0;
score = 0;
nextButton.textContent = "Next";
playAgainButton.style.display = "none"; // Hide the "Play Again" button initially
answerButtons.style.display = "grid"; // Show the answer buttons
displayQuestion();

}

// function to display questions and answers
function displayQuestion() {
    
    setNextQuestion();

    let currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        let button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer");
        button.addEventListener("click", () => checkAnswer(answer));
        answerButtons.appendChild(button);
        });
}

// function to set the next question and answers
function setNextQuestion() {

     nextButton.style.display ="none";
     while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
     }
    }
 
 // function to check the selected answer
function checkAnswer(answer){

    if (answer.correct) {
        alert("Correct!");
        score++; // increment the score
    } else {
        const correctAnswer = questions[currentQuestionIndex].answers.find(function (ans) {
            return ans.correct;
        });
        alert("Incorrect. The correct answer is: " + correctAnswer.text);
    }
  
    currentQuestionIndex++; // move to the next question

    if ( currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        questionText.textContent = `You scored ${score} out of ${questions.length}!`;
        nextButton.style.display = "none";
        answerButtons.style.display = "none";
        playAgainButton.style.display = "inline-block"; // Show the "Play Again" button

    }
}

 runGame();




