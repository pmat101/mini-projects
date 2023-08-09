let mySound;

let play = (x) => {
  if (mySound != undefined) mySound.pause();
  mySound = new Audio(`audio/${x}.mp3`);
  mySound.play();
};
