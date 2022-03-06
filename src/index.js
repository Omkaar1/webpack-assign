import "./index.css";
import img from "../img/logo.png";

const note = JSON.parse(localStorage.getItem("todonote")) || [];
const button = document.getElementById("note_btn");
const webpack_logo = document.getElementById("navbar");

let logotag = document.createElement("img");
logotag.setAttribute("class", "logo");
logotag.src = img;
webpack_logo.append(logotag);

button.addEventListener("click", addNote);
function addNote(e) {
  e.preventDefault();
  const input = document.getElementById("text").value;
  //console.log(input);
  const todo = {
    todoNote: input,
  };
  note.push(todo);
  localStorage.setItem("todonote", JSON.stringify(note));
  appendnote(note);
}

function appendnote(note) {
  note.map(function (item, index) {
    var container = document.getElementById("container");

    var smallnote = document.createElement("div");
    smallnote.setAttribute("id", "smalldiv");
    smallnote.textContent = item.todoNote;

    var remove = document.createElement("button");
    remove.innerHTML = "<button>Remove</button>";

    // remove.addEventListener(click,function(){
    //     Delete(index);
    // })

    container.append(smallnote);
  });
}

window.addEventListener("load", function () {
  var note = JSON.parse(localStorage.getItem("todonote")) || [];
  appendnote(note);
});
