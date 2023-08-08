let mySound;
let play = (x) => {
  switch (x) {
    case "Applause":
      mySound = new Audio("audio/applause.mp3");
      mySound.play();
      break;
    case "Boo":
      mySound = new Audio("audio/boo.mp3");
      mySound.play();
      break;
    case "Gasp":
      mySound = new Audio("audio/gasp.mp3");
      mySound.play();
      break;
    case "Tada":
      mySound = new Audio("audio/tada.mp3");
      mySound.play();
      break;
    case "Victory":
      mySound = new Audio("audio/victory.mp3");
      mySound.play();
      break;
    case "Wrong":
      mySound = new Audio("audio/wrong.mp3");
      mySound.play();
  }
};
