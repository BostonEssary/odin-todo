import todoFactory from './todos'
import projectFactory from './projects'
import buildDOM from './displayController'







const projectLogic = () => {
    let projects = []
    let projectContainer = document.createElement("div")

    projectContainer.id = "project-container"
    
    document.body.append(projectContainer)
    let submitProjectFormButton = document.getElementById("submit-project-btn")
    submitProjectFormButton.addEventListener("click", (e) => {

        let titleField = document.getElementById("project-title")
        e.preventDefault()
        let title = titleField.value
        let newProject = projectFactory(title)

        projects.push(newProject)
        console.log(projects)

        projectContainer.innerHTML = ""
        projects.forEach(project => {
            let p = document.createElement('p')
            p.textContent = project.getTitle()
            projectContainer.append(p)
        });
    })
}

buildDOM()





