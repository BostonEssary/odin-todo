import { handleTodoForm } from "./forms"
import Todo from "./todos"


/*creates title field for a form element and returns said field */
function createTitleField(fieldId){
    const fieldDiv = document.createElement("div")
    fieldDiv.classList.add("field")
    const titleLabel = document.createElement("label")
    titleLabel.textContent = "Title"
    const titleField = document.createElement("input")
    titleField.setAttribute("type", "text")
    titleField.id = fieldId
    titleField.required = true
    fieldDiv.append(titleLabel, document.createElement("br"), titleField)

    return fieldDiv
}

/* creates a form element and returns said form*/
function createForm(formId){
    const form = document.createElement("form")
    form.id = formId
    form.classList.add("hidden")

    return form
}

/* creates submit button for a form and returns said submit button*/
function createSubmitButton(buttonText, buttonId){
    const submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.value = buttonText
    submit.id = buttonId

    return submit
}

/* adds user interactivity to the nav bar*/
function navInteractivity(){
    const showProjectFormButton = document.querySelector(".nav-header-button")
    const menuBtn = document.querySelector(".menu-btn")
    const nav = document.querySelector(".navbar")
    const navContent = document.querySelectorAll(".nav-content")

    showProjectFormButton.addEventListener("click", () => {
        const projectForm = document.getElementById("project-form")
        projectForm.reset()
        projectForm.classList.toggle("hidden")
        projectForm.classList.toggle("bounce-in-right")
        showProjectFormButton.classList.toggle("rotate")
        console.log("test")
    })
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("collapsed")
        navContent.forEach((div) =>{
            div.classList.toggle("hidden")
        })
        
    })
}

/* creates main form that creates projects*/
function projectForm(){
    const contentDiv = document.getElementById("content")
    const projectFormContainer = createForm("project-form")
    const titleField = createTitleField("project-title-field")
    const submit = createSubmitButton("Add Project", "add-project-button")

    
    
    submit.addEventListener("click", () => {
        const projectForm = document.getElementById("project-form")
        projectForm.classList.toggle("hidden")
        projectForm.classList.toggle("bounce-in-right")
    })
    

    projectFormContainer.append(titleField, submit)
    contentDiv.append(projectFormContainer)
}

/* creates main todo form that creates todos for a project*/
function todoForm(){
    const todoFormContainer = createForm("todo-form")
    const titleField = createTitleField("todo-title-field")
    const descriptionLabel = document.createElement("label")
    descriptionLabel.textContent = "Todo Description"
    const cancelButton = document.createElement("button")
    cancelButton.textContent = "Cancel"
    const descriptionField = document.createElement("textarea")
    descriptionField.id = "todo-description-field"
    const submit = createSubmitButton("Add Todo", "add-todo-button")
    
    submit.addEventListener("click", () => {
        const todoForm = document.getElementById("todo-form")
        
        todoForm.classList.add("hidden")
        todoForm.classList.remove("bounce-in-right")
    })
    cancelButton.addEventListener("click", (e) => {
        e.preventDefault()
        const todoForm = document.getElementById("todo-form")
        todoForm.classList.toggle("hidden")
        todoForm.classList.toggle("bounce-in-right")
    })
    todoFormContainer.append(titleField, document.createElement("br"), descriptionLabel, document.createElement("br"), descriptionField, document.createElement("br"),  submit, cancelButton)

    return todoFormContainer
}


/* event listener function that reveals project information to the user when the corresponding project button is clicked*/
function handleProjectButtonClick(project) {
    const projectDiv = document.getElementById("project-div")
    const nav = document.querySelector(".navbar")
    const navContent = document.querySelectorAll(".nav-content")
    projectDiv.innerHTML = ""
    projectDiv.append(displayProject(project), todoForm())
    handleTodoForm(project)
    project.todos.forEach((todo) => projectDiv.append(displayTodos(todo, project)))
    nav.classList.toggle("collapsed")
    navContent.forEach((div) =>{
        div.classList.toggle("hidden")
    })
}

/* creates a button that has a click event listner attached. When clicked, displays project info 
inside project div*/
function projectButton(project){
    const projectButton = document.createElement("button")
    
    const nav = document.querySelector(".nav-content")
    console.log("test")
    projectButton.textContent = project.title

    projectButton.addEventListener("click",function(){
        handleProjectButtonClick(project)
    })
    
    projectButton.classList.add("project-btn")
    nav.append(projectButton)
}

/* event listener function that is added to todo checkbox. when checkbox is clicked, this function edits the corresponding todo in local storage to reflect new todo status*/
function completeTodo(todo, project){
    const newTodo = Todo(todo.title, todo.getDescription())
    let todosProject = localStorage.getItem(project.title)
    let parsedTodosProject = JSON.parse(todosProject)
    parsedTodosProject.todos.forEach((todo) => {
            let currentTodo = JSON.parse(todo)
            if(newTodo.title == currentTodo.title){
                if(currentTodo.completed == false){
                    let index = parsedTodosProject.todos.indexOf(todo)
                    currentTodo.completed = true
                    newTodo.completed = true
                    let stringifiedCurrentTodo = JSON.stringify(currentTodo)
                    parsedTodosProject.todos[index] = stringifiedCurrentTodo
                }
                else{
                    let index = parsedTodosProject.todos.indexOf(todo)
                    currentTodo.completed = false
                    newTodo.completed = false
                    let stringifiedCurrentTodo = JSON.stringify(currentTodo)
                    console.log(stringifiedCurrentTodo)
                    parsedTodosProject.todos[index] = stringifiedCurrentTodo
                }
            }
            
        })
        let replacementProject = JSON.stringify(parsedTodosProject)
        localStorage.setItem(project.title, replacementProject)
}

/* event listener function that is added to todo's delete button. when button is clicked, deletes todo from DOM and removes todo from local storage project by replacing project with a project version that no longer contains that todo*/
function deleteTodo(todo, project, button){
    let todosProject = localStorage.getItem(project.title)
    const newTodo = Todo(todo.title, todo.getDescription())
    let parsedTodosProject = JSON.parse(todosProject)

    parsedTodosProject.todos.forEach((todo) => {
            let currentTodo = JSON.parse(todo)
            if(newTodo.title == currentTodo.title){
                let index = parsedTodosProject.todos.indexOf(todo)
                parsedTodosProject.todos.splice(index, 1)
            }
        })
        let replacementProject = JSON.stringify(parsedTodosProject)
        localStorage.setItem(project.title, replacementProject)
        button.parentElement.remove()
}

/* function that displays a todo with todo information. resides in a div*/
function displayTodos(todo, project){
    const todoContainer = document.createElement("div")
    todoContainer.classList.add("todo-container")
    const todoHeader = document.createElement("h3");
    const todoDescription = document.createElement("p")
    const todoStatus = document.createElement("input")
    const newTodo = Todo(todo.title, todo.getDescription())
    const deleteTodoButton = document.createElement("button")
    deleteTodoButton.classList.add("delete-todo-btn")
    deleteTodoButton.textContent = "Delete Todo"
    newTodo.completed = todo.completed
    todoStatus.classList.add("todo-checkbox")
    todoStatus.type = "checkbox"
    todoStatus.checked = newTodo.completed
    todoStatus.addEventListener("click", function(){
        completeTodo(todo, project)
    })

    deleteTodoButton.addEventListener("click", function(e){
        deleteTodo(todo, project, e.target)
    })
    todoHeader.textContent = newTodo.getTitle()
    todoDescription.textContent = newTodo.getDescription()

    todoContainer.append(todoHeader, todoDescription, todoStatus, deleteTodoButton)
    return todoContainer
}

/* inserts project information into project-div*/
function displayProject(project){
    const projectContainer = document.createElement("div")
    const projectHeader = document.createElement("h2");
    const showTodoFormButton = document.createElement("button")
    showTodoFormButton.textContent = "Add Todo?"
    showTodoFormButton.addEventListener("click", () => {
        const todoForm = document.getElementById("todo-form")
        todoForm.reset()
        todoForm.classList.toggle("hidden")
        todoForm.classList.toggle("bounce-in-right")
        console.log("test")
    })
    
    projectHeader.textContent = project.title

    projectContainer.append(projectHeader, showTodoFormButton)

    return projectContainer
}



export {displayProject, displayTodos, projectButton, projectForm, navInteractivity}