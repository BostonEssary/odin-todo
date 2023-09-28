const createModal = () => {
    const modal = document.createElement("div")
    modal.classList.add("modal")
    
    const closeButton = document.createElement("button")
    closeButton.textContent = "X"
    closeButton.classList.add("close-btn")

    closeButton.addEventListener('click', (e) => {
        modal.classList.add('hidden')
    })

    modal.append(closeButton)
    
    return modal
}

const createNavBar = () => {
    const nav = document.createElement("nav");

    const createProjectButton = document.createElement("button");
    createProjectButton.id = "create-project-btn";
    createProjectButton.textContent = "Add Project"
    
    const siteHeader = document.createElement("h2")
    siteHeader.textContent = "Site Name"

    nav.append(siteHeader, createProjectButton)

    return nav  
}

const projectForm = () => {
    
    const form = document.createElement("form")
    form.id = 'todo-form'

    const titleLabel = document.createElement("label")
    const titleField = document.createElement("input")
    titleField.setAttribute('type', 'text')
    titleField.setAttribute('name', 'title')
    titleField.id = 'project-title'
    titleLabel.setAttribute("for", "title")
    titleLabel.textContent = "Title "

    const submitProjectFormButton = document.createElement("button")
    submitProjectFormButton.id = 'submit-project-btn'
    submitProjectFormButton.setAttribute("value", "save")
    submitProjectFormButton.setAttribute("name", "submit-project-btn")
    submitProjectFormButton.textContent = "Add Project"

    

    form.append(titleLabel, titleField, submitProjectFormButton)


    return form
}


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

export default buildDOM