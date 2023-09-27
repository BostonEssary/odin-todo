const projectFactory = (title) => {
    let todos = [];


    const getTitle = () => title;
    const setTitle = (string) => {title = string};

    const addTodo = (todo) => {
        todos.push(todo);
    };

    const removeTodo = (todo) => {
        let index = todos.indexOf(todo)
        if (index > -1){
            todos.splice(index, 1)
        }
    }

    const getCompletedTodos = () => {
        let completedTodos =[]
        todos.forEach(todo => {
            if(todo.isCompleted) {
                completedTodos.push(todo);
            }
        });
        return completedTodos;
    };

    const consoleLogTodos = () => {
        todos.forEach(todo => {
            console.log(todo.getTitle())
        });
    }



    return {addTodo, removeTodo, getCompletedTodos, consoleLogTodos, getTitle, setTitle}

}

export default projectFactory;