import { getValue } from "./createTodo";
import "./styles/style.css";
import { showTodoItem } from "./createTodo";
import png from "./images/white.png";
const addTodo = document.getElementById("addTodo");
const inputValue = document.getElementById("inputTodo");
function setTodo() {
  showTodoItem(getValue);
}

addTodo.addEventListener("click", setTodo);
