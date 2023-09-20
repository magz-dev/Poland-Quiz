
const questions = [
    {
        question: "What is the capital of Poland?",
        answers: [
            {text:'Warsaw', correct:true},
            {text:'Budapest', correct:false},        
            {text:'Prague', correct:false},
            {text:'Riga', correct:false},

        ]
    },
    { 
        question: "What is the Polish currency unit?",
        answers: [
            {text:'Zloty', correct:true},
            {text:'Krona', correct:false},        
            {text:'Koruna', correct:false},
            {text:'Euro', correct:false},
        ]
    },
    { 
        question: "Who is a president of Poland?",
        answers: [
            {text:'Viktor Orban', correct:false},        
            {text:'Petr Pavel', correct:false},
            {text:'Andrzej Duda', correct:true},
            {text:'Zoran Milanovic', correct:false},
        ]
    },
    { 
        question: "Which chemical element is named after Poland?",
        answers: [
            {text:'Palladium', correct:false},        
            {text:'Radium', correct:false},
            {text:'Radon', correct:false},
            {text:'Polonium', correct:true},

        ]
    },
    { 
        question: "What's the name of Poland's principal seaport?",
        answers: [
            {text:'Gdynia', correct:false},        
            {text:'Krakow', correct:false},
            {text:'Gdansk', correct:true},
            {text:'Sopot', correct:false},

        ]
    },
    { 
        question: "Which astronomer first formulated a model of the universe that placed the Sun at its center?",
        answers: [
            {text:'Joseph Konrad', correct:false}, 
            {text:'Nicolaus Copernicus', correct:true},       
            {text:'Lech Walesa', correct:false},
            {text:'Frederic Chopin', correct:false},

        ]
    },
    { 
        question: "What is the national animal of Poland?",
        answers: [
            {text:'Otter', correct:false}, 
            {text:'European Bison', correct:true},       
            {text:'Red Deer', correct:false},
            {text:'Lynx', correct:false},

        ]
    },

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
        })
     } else {
        endGame();

    }}
    


function setNextQuestion(){
     
    }


function checkAnswer(){

}


function endGame() {

}

