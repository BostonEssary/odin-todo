import { handleTodoForm } from "./forms"
import Project from "./projects"
import Todo from "./todos"
/* */
/* function that appends a form that allows the creation of a new Project object. 
Form logic is found in forms.js */
function projectForm(){
    const projectFormContainer = document.createElement("form")
    projectFormContainer.id = "project-form"
    const titleLabel = document.createElement("label")
    titleLabel.textContent = "Project Title"
    const titleField = document.createElement("input")
    titleField.setAttribute("type", "text")
    titleField.id = "project-title-field"
    const submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.textContent = "Add Project"
    submit.id = "add-project-button"
    projectFormContainer.append(titleLabel, titleField, submit)
    document.body.append(projectFormContainer)
}

function todoForm(){
    const br = document.createElement("br")
    const todoFormContainer = document.createElement("form")
    todoFormContainer.id = "todo-form"
    todoFormContainer.classList.add("hidden")
    const titleLabel = document.createElement("label")
    titleLabel.textContent = "Todo Title"
    const titleField = document.createElement("input")
    titleField.setAttribute("type", "text")
    titleField.id = "todo-title-field"
    const descriptionLabel = document.createElement("label")
    descriptionLabel.textContent = "Todo Description"
    const descriptionField = document.createElement("input")
    descriptionField.setAttribute("type", "text")
    descriptionField.id = "todo-description-field"
    const submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.value = "Add Todo"
    submit.id = "add-todo-button"
    submit.addEventListener("click", () => {
        const todoForm = document.getElementById("todo-form")
        todoForm.classList.add("hidden")
        todoForm.classList.remove("bounce-in-right")
    })
    todoFormContainer.append(titleLabel, document.createElement("br"), titleField, document.createElement("br"), descriptionLabel, document.createElement("br"), descriptionField, document.createElement("br"),  submit)

    return todoFormContainer
}

/* creates a button that has a click event listner attached. When clicked, displays project info 
inside project div*/
function projectButton(project){
    const projectButton = document.createElement("button")
    const projectDiv = document.getElementById("project-div")
    const nav = document.getElementById("navbar")
    
    projectButton.textContent = project.title

    projectButton.addEventListener("click", (e) => {
        projectDiv.innerHTML = ""
        projectDiv.append(displayProject(project), todoForm())
        handleTodoForm(project)
        project.todos.forEach((todo) => projectDiv.append(displayTodos(todo)))
    })
    
    nav.append(projectButton)
}

/* */


function displayTodos(todo){
    const todoContainer = document.createElement("div")
    todoContainer.classList.add("todo-container")
    const todoHeader = document.createElement("h3");
    const todoDescription = document.createElement("p")
    const todoStatus = document.createElement("input")
    const newTodo = Todo(todo.title, todo.getDescription())
    todoStatus.classList.add("todo-checkbox")
    todoStatus.type = "checkbox"
    todoStatus.checked = newTodo.getCompletion()
    todoHeader.textContent = newTodo.getTitle()
    todoDescription.textContent = newTodo.getDescription()

    todoContainer.append(todoHeader, todoDescription, todoStatus)
    return todoContainer
}

function displayProject(project){
    const projectContainer = document.createElement("div")
    const projectHeader = document.createElement("h2");
    const showTodoFormButton = document.createElement("button")
    showTodoFormButton.textContent = "Add Todo?"
    showTodoFormButton.addEventListener("click", () => {
        const todoForm = document.getElementById("todo-form")
        todoForm.classList.remove("hidden")
        todoForm.classList.toggle("bounce-in-right")
    })
    projectHeader.textContent = project.title

    projectContainer.append(projectHeader, showTodoFormButton)

    return projectContainer
}



export {displayProject, displayTodos, projectButton, projectForm}