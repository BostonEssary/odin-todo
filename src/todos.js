const Todo = (title, description) => {
    let completed = false

    const getTitle = () => {
        return title
    }

    const getDescription = () => {
        return description
    }

    const getCompletion = () => {
        return completed
    }

    const setCompletion = () => {
        completed = true
    }

    return {title, getTitle, getDescription, setCompletion, getCompletion}
}

export default Todo 