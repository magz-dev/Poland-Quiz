
const questions = [
    {
        question: 'What is a capital city of Poland?',
        answers: [

        ]
    }

]

let currentQuestionIndex = 0;
const questionText = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

function runGame() {
currentQuestionIndex = 0;
nextButton.innerHTML = "Next";
displayQuestion();
}


function displayQuestion() {
    setNextQuestion();
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
        answerButtons.innerHTML = "";
        questions[currentQuestionIndex].answers.forEach((answer)=> {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.addEventListener("click", checkAnswer);
        optionsElement.appendChild(button);
    })}
    }


    function setNextQuestion() {
     
    }

function checkAnswer(){

}




