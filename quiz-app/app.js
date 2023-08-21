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

let count, answer, score;

let form = document.querySelector("form");
let que = document.getElementById("questions");
let op1 = document.querySelector("label[for='1']");
let op2 = document.querySelector("label[for='2']");
let op3 = document.querySelector("label[for='3']");
let op4 = document.querySelector("label[for='4']");
let radios = document.querySelectorAll("input[type='radio']");
let submit = document.querySelector("input[type='submit']");
let outer = document.createElement("div");

let setup = () => {
  outer.innerHTML = "";
  form.style.visibility = "visible";
  for (let i = 0; i < radios.length; i++) radios[i].checked = false;
  count = 0;
  score = 0;
  que.innerText = questions[count].q;
  op1.innerText = questions[count].op1;
  op2.innerText = questions[count].op2;
  op3.innerText = questions[count].op3;
  op4.innerText = questions[count].op4;
};

let selected = (x) => {
  answer = x;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (answer == questions[count].a) {
    score++;
    answer = 0;
  }
  count++;
  if (count < 4) {
    que.innerText = questions[count].q;
    op1.innerText = questions[count].op1;
    op2.innerText = questions[count].op2;
    op3.innerText = questions[count].op3;
    op4.innerText = questions[count].op4;
    for (let i = 0; i < radios.length; i++) radios[i].checked = false;
  } else {
    form.style.visibility = "hidden";
    outer.setAttribute("id", "outer");
    document.body.appendChild(outer);
    let result = document.createElement("p");
    result.innerText = `You answered ${score}/4 questions correctly!`;
    result.setAttribute("id", "upper");
    outer.appendChild(result);
    let reload = document.createElement("button");
    reload.innerText = "Reload";
    reload.setAttribute("id", "reload");
    reload.addEventListener("click", setup);
    outer.appendChild(reload);
  }
});
