(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"21f991dfe76d512c2c7a7d3724f48316.png",n=document.getElementById("inputTodo"),o=document.getElementById("headTodo");function c(e){return e.value}function l(e){!function(e){let t;t=null===localStorage.getItem?[]:JSON.parse(localStorage.getItem("Webpack"));t.push(e),localStorage.setItem("Webpack",JSON.stringify(t))}(e.value)}function r(){let e;e=null===localStorage.getItem?[]:JSON.parse(localStorage.getItem("Webpack")),e.forEach((e=>{let n=document.createElement("div");n.className="newTodo",n.classList.add="newTodo";let c=document.createElement("h3");c.className="description-todo",c.textContent=e;let l=document.createElement("img");l.className="img-png",l.classList.add="img-png",l.src=t,l.id="deleteTodo",n.append(c,l),o.prepend(n),document.getElementById("deleteTodo").addEventListener("click",(()=>{(function(e){let t;t=null===localStorage.getItem?[]:JSON.parse(localStorage.getItem("Webpack"));let n=e.innerText;return t.splice(t.indexOf(n),1),localStorage.setItem("Webpack",JSON.stringify(t)),!0})(c)&&n.remove()}))}))}console.log(r());const a=document.getElementById("addTodo");document.getElementById("inputTodo");a.addEventListener("click",(function(){c(n),l(n),r()}))})();