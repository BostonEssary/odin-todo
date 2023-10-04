import  Project  from "./projects"
import  Todo  from "./todos"
import { navInteractivity, projectButton, projectForm } from "./displayController"
import { handleProjectForm } from "./forms"
/* */
const Main = () => {
    const localProjects = Object.keys(localStorage)

    localProjects.forEach((key) => {
        let currentProject = JSON.parse(localStorage.getItem(key))
        let currentProjectTodos = currentProject.todos
        let project = Project(currentProject.title)
        currentProjectTodos.forEach((todo) => {
            let parsedTodo = JSON.parse(todo)
            let newTodo = Todo(parsedTodo.title, parsedTodo.description)
            newTodo.completed = parsedTodo.completed
            project.todos.push(newTodo)
            
        })
        projectButton(project)
    })

    navInteractivity()
    projectForm()
    handleProjectForm()
}

Main()

