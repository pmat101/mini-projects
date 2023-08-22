document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
});

let form = document.querySelector("form");

let bg = document.styleSheets[0].cssRules[2]; //  Selecting Pseudo element using CSS

let input = (x) => {
  switch (x.length) {
    case 1:
      bg.style.filter = "blur(14px)";
      break;
    case 2:
      bg.style.filter = "blur(12px)";
      break;
    case 3:
      bg.style.filter = "blur(10px)";
      break;
    case 4:
      bg.style.filter = "blur(8px)";
      break;
    case 5:
      bg.style.filter = "blur(6px)";
      break;
    case 6:
      bg.style.filter = "blur(4px)";
      break;
    case 7:
      bg.style.filter = "blur(2px)";
      break;
    default:
      bg.style.filter = "blur(0)";
  }
};
