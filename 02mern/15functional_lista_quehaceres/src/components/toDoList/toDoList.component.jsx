import React, { useState } from "react"

const ToDoList = (props) => {

// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
    const [toDo, setToDo] = useState([])
    const [newTask, setNewTask] = useState('');

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
    const handleChange = (event) => {
    setNewTask(event.target.value);
    };

    const addTask=() => {
        if (newTask.trim() !== "") {
            setToDo([...toDo, { text: newTask, completed: false }]);
            setNewTask("");
        }
    }

    const deleteTask=(index) => {
        const updatedTasks = toDo.filter((toDo, i) => i !== index);
        setToDo(updatedTasks);
    }

    const markDone=(index) => {
        const updatedTasks = toDo.map((toDo, i) =>
        i === index ? { ...toDo, completed: !toDo.completed } : toDo);
        setToDo(updatedTasks);
    }

// ---------------------------------------------
// III) JSX
// ---------------------------------------------    
    return(
        <div>
            <input type="text" value={newTask} onChange={handleChange} />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {toDo.map((toDo, index) => (
                <li
                    key={index}
                    style={{
                    textDecoration: toDo.completed ? "line-through" : "none",
                    }}
                >
                    {toDo.text}
                    <button onClick={() => markDone(index)}>
                    {toDo.completed ? "Undone" : "Done"}
                    </button>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;