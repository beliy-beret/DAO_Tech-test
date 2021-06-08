import React from 'react'

const Task = ({text}) => {
    return (
        <div className="task-component">
            <p>
                {text} 
            </p>
            <button>Удалить задачу</button>
        </div>
    )
};
export default Task;
