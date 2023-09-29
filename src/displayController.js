function displayProject(title){
    const projectContainer = document.createElement("div")
    const projectHeader = document.createElement("h2");
    projectHeader.textContent = title

    projectContainer.append(projectHeader)

    document.body.append(projectContainer)
}

export {displayProject}