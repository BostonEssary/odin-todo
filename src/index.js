import  Project  from "./projects"
import  Todo  from "./todos"
import { projectButton, projectForm } from "./displayController"
import { handleProjectForm } from "./forms"
/* */
const Main = () => {
    /* Dummy Data for testing*/
    const firstProject = Project("first project")
    const secondProject = Project("second project")
    const firstTodo = Todo("test", "description")
    const secondTodo = Todo("this is another todo", "this is the description")
    let projects = [firstProject, secondProject]
    let todos = [firstTodo, secondTodo]
    const todoCheckboxes = document.getElementsByClassName("todo-checkbox")
    
    /* goes over each project in project arr*/
    projects.forEach((project) => {

        /* retrieves todos arr and adds each todo to the current project iteration*/
        todos.forEach((todo) => project.addTodo(todo))
        
        
        projectButton(project)
        
        
        
        
    })
    
    projectForm()
    handleProjectForm(projects)
    console.log(todoCheckboxes)
}

Main()

