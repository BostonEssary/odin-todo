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

export default projectForm