
function runGame() {

}


function setNextQuestion() {

}



function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
        answerText.innerHTML = "";
        questions[currentQuestionIndex].answer-btn.forEach((answer)=> {
        button.textContent = answer;
        button.addEventListener("click", checkAnswer);
        })
        }
    }



function checkAnswer(){

}




const questions = [
    {
        question: 'What is a capital city of Poland?',
        answers: [

        ]
    }

]

let currentQuestionIndex = 0;
const questionText = document.getElementById("question");
const answerText = document.getElementById("answer-btn");