import React from 'react'

const Task = ({text, deleteTask, Id, toggleDone}) => {
    return (
        <div className="tasks-list__element">
            <p onClick={() => toggleDone(Id)}>
                {text} 
            </p>
            <button onClick={() => deleteTask(Id)}>Удалить задачу</button>
        </div>
    )
};
export default Task;
