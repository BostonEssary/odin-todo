const todoFactory = (title, description, dueDate) => {
    let completed = false;

    const getTitle = () => title;
    const setTitle = (string) => {title = string};

    const getDescription = () => description;
    const setDescription = (string) => {description = string};

    const getDueDate = () => dueDate;
    const setDueDate = (date) => {dueDate = date};

    const markComplete = () => {completed = true};
    const markUncompleted = () => {completed = false}
    const isCompleted = () => completed

    return {getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate, markComplete, markUncompleted, isCompleted}
}

export default todoFactory