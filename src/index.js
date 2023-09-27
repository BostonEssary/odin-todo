import todoFactory from './todos'
import projectFactory from './projects'
import createNavbar from './navbar'
import createModal from './modal'
import projectForm from './projectForm'
import User from './user'





const buildDOM = () => {
    /* Builds modal that appears when Create Project button is clicked. Is automatically set to hidden when added*/
    let projectModal = createModal()
    projectModal.id = "project-modal"
    projectModal.classList.add("hidden")

    let newProjectForm = projectForm()
    projectModal.append(newProjectForm)

    let navBar = createNavbar();

    /* appends all above elements to the body tag of our html document*/
    document.body.append(navBar, projectModal)

    /* selects create project button element and adds click event handler so the create project modal can appear to the user once the button is clicked*/

    let projectBtn = document.getElementById('create-project-btn')
    projectBtn.addEventListener('click', (e) => {
    projectModal.classList.remove('hidden')
    })
    
    
    
}

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
projectLogic()




