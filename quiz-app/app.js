const questions = [
  {
    q: "Which language runs in a web browser?",
    op1: "Java",
    op2: "C",
    op3: "Python",
    op4: "JavaScript",
    a: "JavaScript",
  },
  {
    q: "What does CSS stand for?",
    op1: "Central Style Sheets",
    op2: "Cascading Style Sheets",
    op3: "Cascading Simple Sheets",
    op4: "Cars SUVs Sailboats",
    a: "Cascading Style Sheets",
  },
  {
    q: "What does HTML stand for?",
    op1: "Hypertext Markup Language",
    op2: "Hypertext Markdown Language",
    op3: "Hyperloop Machine Language",
    op4: "Helicopters Terminals Motorboats Lamborginis",
    a: "Hypertext Markup Language",
  },
  {
    q: "What year was JavaScript launched?",
    op1: "1996",
    op2: "1995",
    op3: "1994",
    op4: "none of the above",
    a: "1995",
  },
];

let score = 0;
let count = 0;
let q = document.getElementById("questions");
let op1 = document.querySelector("label[for='1']");
let op2 = document.querySelector("label[for='2']");
let op3 = document.querySelector("label[for='3']");
let op4 = document.querySelector("label[for='4']");
let submit = document.querySelector("input[type='submit']");

let display = () => {
  q.innerText = questions[count].q;
  op1.innerText = questions[count].op1;
  op2.innerText = questions[count].op2;
  op3.innerText = questions[count].op3;
  op4.innerText = questions[count].op4;
  count++;
  display();
};

display();
