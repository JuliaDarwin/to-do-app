import { useState } from "react";

function Todo(){
    const [tasks, setTasks] =useState([]);
    

    const handleAddTask = () => {
        const newTask = document.getElementById("task").value
        setTasks(prevTasks => [...prevTasks, newTask]);
        document.getElementById("task").value = "";
    };
    const handleUp = (index) => {
        if (index > 0) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
            setTasks(newTasks);
        }
    };
    const handleDown = (index) => {
        if(index < tasks.length - 1){
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index+1]] = [newTasks[index +1], newTasks[index]];
            setTasks(newTasks);
        }
    };
    
    
    const handleRemove = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return(
        <div id="body">
            <h1>My To-Do App</h1>
            <ol>
                {tasks.map((task, index) => {
                    return (
                        <li key={index}>{task}
                            <button onClick={() => handleUp(index)} id="up">Up</button>
                            <button onClick={() => handleDown (index)} id="down">Down</button>
                            <button onClick={() => handleRemove(index)} id="remove">Remove</button>
                        </li>
                    )
                })}
            </ol>
            <h2>Add Another Task</h2>
            <input type="text" id="task"/>
            <button onClick={handleAddTask} id="add">Add Task</button>

        </div>
    )
}

export default Todo