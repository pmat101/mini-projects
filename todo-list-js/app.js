let count = 0;

let inp = document.querySelector("input");
inp.addEventListener("keypress", (e) => {
  //  Getting input when Return key is pressed
  if (e.key == "Enter") {
    let newNote = document.createElement("p");
    newNote.setAttribute("id", ++count);
    newNote.setAttribute("onclick", "left(id)");
    newNote.innerText = inp.value;
    document.querySelector("section").appendChild(newNote);
    inp.value = "";

    //  left-click
    newNote.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      newNote.remove();
    });

    //  right-click
    newNote.addEventListener("click", () => {
      if (newNote.style.textDecoration == "line-through")
        newNote.style.textDecoration = "none";
      else newNote.style.textDecoration = "line-through";
    });
  }
});
