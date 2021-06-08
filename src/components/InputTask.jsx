import React from 'react'

const InputTask = ({inputHandler, taskText, setTask}) => {    
    return (
        <form onSubmit={setTask}>
            <input type="text" placeholder="Ваша задача" value={taskText} onChange={inputHandler} />
            <button>Создать задачу</button>
        </form>
    )
};
export default InputTask;
