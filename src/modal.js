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

export default createModal