import Project from "./projects"
import { projectButton, displayTodos } from "./displayController"
import Todo from "./todos"

/* creates Project obj in local storage and adds new project button to DOM*/
function handleProjectForm(){
    const projectForm = document.getElementById("project-form")
    const localProjects = Object.keys(localStorage)
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let projectTitle = document.getElementById("project-title-field")
        let newProject = Project(projectTitle.value)
        if(localProjects.includes(projectTitle.value)){
            alert(`Project title "${projectTitle.value}" already exists. Please choose a different title`)
        }
        else{
            localStorage.setItem(newProject.title, JSON.stringify(newProject))
            projectButton(newProject)
        }
        
    })
}



/* creates Todo in local storage Project obj*/
function handleTodoForm(project){
    const todoForm = document.getElementById("todo-form")
    const projectDiv = document.getElementById("project-div")

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault()

        /* locates project in local storage based on the project arguement's title*/
        let localProject = JSON.parse(localStorage.getItem(project.title))
        console.log(localProject)
        let todoTitle = document.getElementById("todo-title-field")
        let todoDescription = document.getElementById("todo-description-field")
        console.log(todoDescription.value)
        let newTodo = Todo(todoTitle.value, todoDescription.value)
        console.log(newTodo)
        let stringifiedTodo = JSON.stringify(newTodo)
        console.log(stringifiedTodo)
        project.addTodo(newTodo)
        projectDiv.append(displayTodos(newTodo, project))
        localProject.todos.push(stringifiedTodo)
        localStorage.setItem(localProject.title, JSON.stringify(localProject) )
        
    })
}
export {handleProjectForm, handleTodoForm}