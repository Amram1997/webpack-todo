import getValue from "./createTodo";
const addTodo1 = document.getElementById("addTodo");
console.log(addTodo1);
const inputValue = document.getElementById("inputTodo");
function setTodo() {
  console.log(getValue(inputValue));
  console.log("hello");
}

addTodo1.addEventListener("click", setTodo);
