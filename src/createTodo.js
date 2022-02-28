import png from "./images/white.png";
const inputValue = document.getElementById("inputTodo");
const HEAD_TODO = document.getElementById("headTodo");
export function getValue(value) {
  let todo = value.value;
  return todo;
}

export function showTodoItem(callBack) {
  let itemValue = callBack(inputValue);
  let div = document.createElement("div");
  div.className = "newTodo";
  let h3 = document.createElement("h3");
  h3.className = "description-todo";
  h3.textContent = itemValue;
  let img = document.createElement("img");
  img.className = "img-png";
  img.src = png;
  div.append(h3, img);
  HEAD_TODO.prepend(div);
  return HEAD_TODO;
}
