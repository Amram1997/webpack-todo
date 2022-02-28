import getValue from "./createTodo";
import "./styles/style.css";
const addTodo = document.getElementById("addTodo");
const inputValue = document.getElementById("inputTodo");

function setTodo() {
  console.log(getValue(inputValue));
}

addTodo.addEventListener("click", setTodo);
