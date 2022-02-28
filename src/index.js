import { getValue } from "./createTodo";
import "./styles/style.css";
import { showTodoItem } from "./createTodo";
import { update } from "./createTodo";

const addTodo = document.getElementById("addTodo");
const inputValue = document.getElementById("inputTodo");
function setTodo() {
  showTodoItem(getValue);
  update();
}

addTodo.addEventListener("click", setTodo);
