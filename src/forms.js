import Project from "./projects"
import { projectButton } from "./displayController"
import Todo from "./todos"

function handleProjectForm(){
    const projectForm = document.getElementById("project-form")
    const localProjects = Object.keys(localStorage)
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let nav = document.getElementById("navbar")
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



function handleTodoForm(project){
    const todoForm = document.getElementById("todo-form")
    let localProject = JSON.parse(localStorage.getItem(project.title))

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault()

        /* locates project in local storage based on the project arguement's title*/
        let localProject = JSON.parse(localStorage.getItem(project.title))
        console.log(localProject)
        let todoTitle = document.getElementById("todo-title-field")
        
        let newTodo = Todo(todoTitle.value, "this is the defualt description")
        let stringifiedTodo = JSON.stringify(newTodo)
        console.log(stringifiedTodo)
        project.addTodo(newTodo)
        localProject.todos.push(stringifiedTodo)
        localStorage.setItem(localProject.title, JSON.stringify(localProject) )
        
    })
}
export {handleProjectForm, handleTodoForm}