(()=>{"use strict";(()=>{let e=(()=>{const e=document.createElement("div");e.classList.add("modal");const t=document.createElement("button");return t.textContent="X",t.classList.add("close-btn"),t.addEventListener("click",(t=>{e.classList.add("hidden")})),e.append(t),e})();e.id="project-modal",e.classList.add("hidden");let t=(()=>{const e=document.createElement("form");e.id="todo-form";const t=document.createElement("label"),n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("name","title"),n.id="project-title",t.setAttribute("for","title"),t.textContent="Title ";const o=document.createElement("button");return o.id="submit-project-btn",o.setAttribute("value","save"),o.setAttribute("name","submit-project-btn"),o.textContent="Add Project",e.append(t,n,o),e})();e.append(t);let n=(()=>{const e=document.createElement("nav"),t=document.createElement("button");t.id="create-project-btn",t.textContent="Add Project";const n=document.createElement("h2");return n.textContent="Site Name",e.append(n,t),e})();document.body.append(n,e),document.getElementById("create-project-btn").addEventListener("click",(t=>{e.classList.remove("hidden")}))})(),(()=>{let e=[],t=document.createElement("div");t.id="project-container",document.body.append(t),document.getElementById("submit-project-btn").addEventListener("click",(n=>{let o=document.getElementById("project-title");n.preventDefault();let d=(e=>{let t=[];return{addTodo:e=>{t.push(e)},removeTodo:e=>{let n=t.indexOf(e);n>-1&&t.splice(n,1)},getCompletedTodos:()=>{let e=[];return t.forEach((t=>{t.isCompleted&&e.push(t)})),e},consoleLogTodos:()=>{t.forEach((e=>{console.log(e.getTitle())}))},getTitle:()=>e,setTitle:t=>{e=t}}})(o.value);e.push(d),console.log(e),t.innerHTML="",e.forEach((e=>{let n=document.createElement("p");n.textContent=e.getTitle(),t.append(n)}))}))})()})();