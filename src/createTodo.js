import png from "./images/white.png";
const inputValue = document.getElementById("inputTodo");
const HEAD_TODO = document.getElementById("headTodo");
const Arr = [];
export function getValue(value) {
  let todo = value.value;
  return todo;
}

export function showTodoItem(callBack) {
  let itemValue = callBack(inputValue);
  // let div = document.createElement("div");
  // div.className = "newTodo";
  // let h3 = document.createElement("h3");
  // h3.className = "description-todo";
  // h3.textContent = itemValue;
  // let img = document.createElement("img");
  // img.className = "img-png";
  // img.src = png;
  // div.append(h3, img);
  // HEAD_TODO.prepend(div);
  return HEAD_TODO;
}

export function arrPushInputValue(input) {
  setLocalStorage(input.value);
}

function setLocalStorage(value) {
  let arr;
  if (localStorage.getItem === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("Webpack"));
  }
  arr.push(value);
  localStorage.setItem("Webpack", JSON.stringify(arr));
}

function getLocalStorage() {
  let arr;
  if (localStorage.getItem === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("Webpack"));
  }
  arr.forEach((element) => {
    let div = document.createElement("div");
    div.className = "newTodo";
    div.classList.add = "newTodo";
    let h3 = document.createElement("h3");
    h3.className = "description-todo";
    h3.textContent = element;
    let img = document.createElement("img");
    img.className = "img-png";
    img.classList.add = "img-png";
    img.src = png;
    img.id = "deleteTodo";
    div.append(h3, img);
    HEAD_TODO.prepend(div);
    document.getElementById("deleteTodo").addEventListener("click", () => {
      if (removeItemLocalStorage(h3)) {
        div.remove();
      }
    });
  });
}

console.log(getLocalStorage());
function removeItemLocalStorage(item) {
  let arr;
  if (localStorage.getItem === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("Webpack"));
  }
  let index = item.innerText;
  arr.splice(arr.indexOf(index), 1);
  localStorage.setItem("Webpack", JSON.stringify(arr));
  return true;
}
export function update() {
  arrPushInputValue(inputValue);
  getLocalStorage();
}
