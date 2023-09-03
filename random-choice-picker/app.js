const buttons = document.querySelector("#buttons");
let count = 0;

let enterTheDragon = (last, string) => {
  if (string.length == 0 || last.key == ",") createButton();
  else if (last.key != ",") addText(string);
  else if (last.key == "Enter") console.log("ok");
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
  oldBtn.innerText = arr[length];
};
