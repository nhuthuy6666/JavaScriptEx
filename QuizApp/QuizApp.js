const questions = [
    {
        question: "Which programming language is used to style web pages?",
        answers: [
            {text: "Python", correct: false},
            {text: "JavaScript", correct: false},
            {text: "HTML", correct: false},
            {text: "CSS", correct: true}
        ]
    },
    {
        question: "Who is the author of the theory of relativity?",
        answers: [
            {text: "Isaac Newton", correct: false},
            {text: "Albert Einstein", correct: true},
            {text: "Galileo Galilei", correct: false},
            {text: "Nikola Tesla", correct: false}
        ]
    },
    {
        question: "Which city is the capital of Japan?",
        answers: [
            {text: "Seoul", correct: false},
            {text: "Beijing", correct: false},
            {text: "Tokyo", correct: true},
            {text: "Bangkok", correct: false}
        ]
    },
    {
        question: "In what year did humans first set foot on the moon?",
        answers: [
            {text: "1959", correct: false},
            {text: "1965", correct: false},
            {text: "1969", correct: true},
            {text: "1972", correct: false}
        ]
    }
];

const currentquestionElement = document.getElementById("question");
const answerbtns = document.querySelector(".answer");
const nextbtn = document.querySelector(".nextbtn");

let questionindex = 0;
let score = 0;

function StartQuiz(){
    questionindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    ShowQuestion();
}

function ShowQuestion(){

    ResetState();

    const currentquestion = questions[questionindex];
    const questionnumber = questionindex + 1;
    currentquestionElement.innerHTML = questionnumber + '. ' + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", SelectAnswer);
    })
}

function ResetState(){
    nextbtn.style.display = "none";
    while(answerbtns.firstChild){
        answerbtns.removeChild(answerbtns.firstChild);
    }
}

function SelectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score ++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbtns.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextbtn.style.display = "block";
}

function ShowScore(){
    ResetState();
    currentquestionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}

function HandleNextbtn(){
    questionindex ++;
    if(questionindex < questions.length){
        ShowQuestion();
    }
    else{
        ShowScore();
    }
}

nextbtn.addEventListener("click", () => {
    if(questionindex < questions.length){
        HandleNextbtn();
    }
    else{
        StartQuiz();
    }
})

StartQuiz();

