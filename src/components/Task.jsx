import React from 'react'

const Task = ({text, deleteTask, Id, toggleDone, done}) => {
    return (
        <div className="tasks-list__element">
            <p className={ done ? "done" : "p"} onClick={() => toggleDone(Id)}>
                {text} 
            </p>
            <button className="button" onClick={() => deleteTask(Id)}>Удалить задачу</button>
        </div>
    )
};
export default Task;
