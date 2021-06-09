import React from 'react'

const InputTask = ({inputHandler, taskText, createTask}) => {    
    return (
        <div>
            <input type="text" placeholder="Ваша задача" value={taskText} onChange={inputHandler} />
            <button className="button" onClick={createTask}>Создать задачу</button>
        </div>
    )
};
export default InputTask;
