const buttons = document.querySelector("#buttons");
let count = 0;

let enterTheDragon = (last, string) => {
  if (string.length == 0 || last.key == ",") createButton();
  else if (last.key != "," && last.key != "Enter") addText(string);
  else choice(string);
};

let createButton = () => {
  let newBtn = document.createElement("button");
  count++;
  newBtn.setAttribute("id", count);
  buttons.appendChild(newBtn);
};

let addText = (val) => {
  let arr = val.split(",");
  let oldBtn = document.getElementById(count);
  oldBtn.innerText = arr[arr.length - 1];
};

let choice = (x) => {
  let arr = x.split(",");
  let rand = Math.ceil(Math.random() * arr.length);
  let chosen = document.getElementById(rand);
  chosen.style.backgroundColor = "red";
};
