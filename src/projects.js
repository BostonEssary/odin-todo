

const Project = (title) => {
    const todos = []

    const addTodo = (todo) => {
        todos.push(todo)
    }


    const getTitle = () => {
        return title
    }
    return {title, todos, addTodo, getTitle}
}

export default Project