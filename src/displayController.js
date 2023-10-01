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

function projectButton(project){
    const projectButton = document.createElement("button")
    const projectDiv = document.getElementById("project-div")
    const nav = document.getElementById("navbar")
    
    projectButton.textContent = project.title

    projectButton.addEventListener("click", (e) => {
        projectDiv.innerHTML = ""
        projectDiv.append(displayProject(project))
        project.todos.forEach((todo) => projectDiv.append(displayTodos(todo)))
        project.todos.forEach((todo) => projectDiv.append(markTodoButton(todo)))
    })
    nav.append(projectButton)
}

function markTodoButton(todo){
    const markTodoButton = document.createElement("button")
    markTodoButton.textContent = todo.title
    markTodoButton.addEventListener("click", (e) => {
        todo.setCompletion()
        console.log(todo.getCompletion())
    })
    return markTodoButton
}

function displayTodos(todo){
    const todoContainer = document.createElement("div")
    const todoHeader = document.createElement("p");
    const todoDescription = document.createElement("p")
    const todoStatus = document.createElement("input")
    todoStatus.classList.add("todo-checkbox")
    todoStatus.type = "checkbox"
    todoStatus.checked = todo.getCompletion()
    todoHeader.textContent = todo.getTitle()
    todoDescription.textContent = todo.getDescription()

    todoContainer.append(todoHeader, todoDescription, todoStatus)
    return todoContainer
}

function displayProject(project){
    const projectContainer = document.createElement("div")
    const projectHeader = document.createElement("h2");
    projectHeader.textContent = project.title

    projectContainer.append(projectHeader)

    return projectContainer
}



export {displayProject, displayTodos, markTodoButton, projectButton, projectForm}