import { Project } from "./projects"
import { displayProject } from "./displayController"

const Main = () => {
    const firstProject = Project("first project")
    const secondProject = Project("second project")
    let projects = [firstProject, secondProject]

    projects.forEach((project) => {
        displayProject(project.title)
    })
}

Main()