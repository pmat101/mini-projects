// numbers = 48 - 57
let numbers = () => {
  let random = Math.floor(Math.random() * (58 - 48) + 48);
  return String.fromCharCode(random);
};
// uppercase = 65 - 90
let uppercase = () => {
  let random = Math.floor(Math.random() * (91 - 65) + 65);
  return String.fromCharCode(random);
};
// lowercase = 97 - 122
let lowercase = () => {
  let random = Math.floor(Math.random() * (123 - 97) + 97);
  return String.fromCharCode(random);
};
// symbols = 33 - 47
let symbols = () => {
  let random = Math.floor(Math.random() * (48 - 33) + 33);
  return String.fromCharCode(random);
};

document.querySelector("button").addEventListener("click", function () {
  let length = document.querySelector("#limit").value;
  let uc = document.querySelector("#uc").checked;
  let lc = document.querySelector("#lc").checked;
  let num = document.querySelector("#num").checked;
  let sym = document.querySelector("#sym").checked;
  let str = "";
  let arr = [];
  let rand = 0;
  for (let i = 0; i < length; i++) {
    if (uc) arr.push(uppercase());
    if (lc) arr.push(lowercase());
    if (num) arr.push(numbers());
    if (sym) arr.push(symbols());
    if (arr.length > 0) {
      rand = Math.floor(Math.random() * arr.length);
      str = str + arr[rand];
    }
  }
  document.querySelector("#output p").innerText = str;
});

document.querySelector("#output span").addEventListener("click", function () {
  let output = document.querySelector("#output p").innerText;
  navigator.clipboard.writeText(output);
  alert("Copied to Clipboard!");
});
