import  Project  from "./projects"
import  Todo  from "./todos"
import { projectButton, projectForm } from "./displayController"
import { handleProjectForm } from "./forms"
/* */
const Main = () => {
    /* Dummy Data for testing*/
   
    const todoCheckboxes = document.getElementsByClassName("todo-checkbox")
    const localProjects = Object.keys(localStorage)
    /* goes over each project in project arr*/
    

    localProjects.forEach((key) => {
        let currentProject = JSON.parse(localStorage.getItem(key))
        let currentProjectTodos = currentProject.todos
        let project = Project(currentProject.title)
        currentProjectTodos.forEach((todo) => {
            let newTodo = Todo(todo)
            project.todos.push(newTodo)
        })
        console.log(typeof(project.todos[0]))
        projectButton(project)
    })

    projectForm()
    handleProjectForm()
    
   const test = JSON.parse(localStorage.getItem("test"))
    console.log(test.todos)
    
}

Main()

