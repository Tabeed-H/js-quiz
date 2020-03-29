let start = document.getElementsByClassName("start");
let quiz = document.getElementById("quizContainer");
let Question = document.getElementById("questions");
let counter = document.getElementById("counter");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");
let score = document.getElementById("scoreContainer");

let questionArray = [
    {
        question : "HTML stands for",
        choiceA : "Hyper text markup language",
        choiceB : "Hyper team markup language",
        choiceC : "Hyper text markeup language",
        choiceD : "Hyper text markup land",
        correct : "A",
    },
    {
        question : "HTML stands for 2",
        choiceA : "Hyper text markup language",
        choiceB : "Hyper team markup language",
        choiceC : "Hyper text markeup language",
        choiceD : "Hyper text markup land",
        correct : "A",
    },
    {
        question : "HTML stands for 3",
        choiceA : "Hyper text markup language",
        choiceB : "Hyper team markup language",
        choiceC : "Hyper text markeup language",
        choiceD : "Hyper text markup land",
        correct : "A",
    }
];


let lastQuestionIndex = questionArray.length-1;
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questionArray[runningQuestionIndex];
    Question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
};
window.addEventListener("load", renderQuestion);
let scores = 0;
function checkAnswer(answer){
    if( questionArray[runningQuestionIndex].correct  === answer){
        runningQuestionIndex++;
        scores++
        document.getElementById("scoreObtained").innerHTML = scores;
        renderQuestion();
    }else{
        alert("wrong")
    }
}