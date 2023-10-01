import Project from "./projects"
import { projectButton } from "./displayController"

function handleProjectForm(projects){
    const projectForm = document.getElementById("project-form")
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let nav = document.getElementById("navbar")
        let projectTitle = document.getElementById("project-title-field")
        let newProject = Project(projectTitle.value)
        projects.push(newProject)
        projectButton(newProject)
        console.log(projectTitle.value)
    })
}

export {handleProjectForm}