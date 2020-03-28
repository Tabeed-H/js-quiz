let currentpage = 0;
let myQuiz = [
    ['RAM Stands For:','Real Avialable Memory','Read Acess Memory','Random Access Memory','Random Available Memory',3],
    ['RIP Stands For :','Rest In Peace','Ripped In Pieces','Rest In Park','Really Intelligent Person', 1]
];
document.getElementById("btnPrevious").addEventListener("click",moveBack);
document.getElementById("btnNext").addEventListener("click",moveNext);
let myQuestion = document.getElementById("questions");
let myHeader = document.getElementById("quizHeader");
let className = document.getElementsByClassName("answer");
