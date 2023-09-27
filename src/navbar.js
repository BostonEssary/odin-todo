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

export default createNavBar