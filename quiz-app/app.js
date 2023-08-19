const questions = [
  {
    q: "Which language runs in a web browser?",
    op1: "Java",
    op2: "C",
    op3: "Python",
    op4: "JavaScript",
    a: 4,
  },
  {
    q: "What does CSS stand for?",
    op1: "Central Style Sheets",
    op2: "Cascading Style Sheets",
    op3: "Cascading Simple Sheets",
    op4: "Cars SUVs Sailboats",
    a: 2,
  },
  {
    q: "What does HTML stand for?",
    op1: "Hypertext Markup Language",
    op2: "Hypertext Markdown Language",
    op3: "Hyperloop Machine Language",
    op4: "Helicopters Terminals Motorboats Lamborginis",
    a: 1,
  },
  {
    q: "What year was JavaScript launched?",
    op1: "1996",
    op2: "1995",
    op3: "1994",
    op4: "none of the above",
    a: 2,
  },
];

let score = 0;
let count = 0;
let answer = 0;

let que = document.getElementById("questions");
let op1 = document.querySelector("label[for='1']");
let op2 = document.querySelector("label[for='2']");
let op3 = document.querySelector("label[for='3']");
let op4 = document.querySelector("label[for='4']");
let submit = document.querySelector("input[type='submit']");

que.innerText = questions[count].q;
op1.innerText = questions[count].op1;
op2.innerText = questions[count].op2;
op3.innerText = questions[count].op3;
op4.innerText = questions[count].op4;

let selected = (x) => {
  answer = x;
};

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  count++;
  if (count < 4) {
    que.innerText = questions[count].q;
    op1.innerText = questions[count].op1;
    op2.innerText = questions[count].op2;
    op3.innerText = questions[count].op3;
    op4.innerText = questions[count].op4;
    submit.addEventListener("click", function () {
      if (answer == questions[count].a) {
        score++;
        answer = 0;
      }
      console.log(count);
    });
  } else {
    // let para = document.createElement("p");
    // para.innerText = score;
    document.body.innerHTML = score;
  }
});
