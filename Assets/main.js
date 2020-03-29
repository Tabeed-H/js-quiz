//Place holder for all the  elements in the HTML
let quiz = document.getElementById("quizContainer");    //selects the main container of the quiz
let Question = document.getElementById("questions");    //selects the question holder
let choiceA = document.getElementById("A");             //selects the options holder
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");

// the array contains the questions as objects
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
        question : "CSS stands for ",
        choiceA : "Carrot Slicing System",
        choiceB : "Cascading Style sheet",
        choiceC : "some thing",
        choiceD : "something else",
        correct : "B",
    },
    {
        question : "HTML is a",
        choiceA : "programming language",
        choiceB : "nothing",
        choiceC : "text editing language for the web",
        choiceD : "i dont know",
        correct : "C",
    }
];

let lastQuestionIndex = questionArray.length-1;

//sets the index of the first question as 0
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questionArray[runningQuestionIndex];
    Question.getElementsByTagName("h1")[0].innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
};

//loads the question
window.addEventListener("load", renderQuestion);

//initial score is 0
let scores = 0;

//checks for the answer and adds the score if true
function checkAnswer(answer){
    if( questionArray[runningQuestionIndex].correct  === answer){
        runningQuestionIndex++;     //adds 1 to the present index number
        scores++        //adds 1 to score if true
        document.getElementById("scoreObtained").getElementsByTagName("p")[0].innerHTML = scores; //displays present score

        //checks if the next question is availble 
        if(runningQuestionIndex > lastQuestionIndex){
            if(confirm("do you want to repeat")){
                location.reload();
            }else{
                document.getElementById("total").style.display = block;
            }
        }else{
            renderQuestion();
        }
    }else{
        alert("wrong")
    }
}