import React from 'react';

const InputTask = ({ inputHandler, taskText, createTask }) => (
  <div>
    <input type="text" placeholder="Ваша задача" value={taskText} onChange={inputHandler} />
    <button className="button" type="button" onClick={createTask}>Создать задачу</button>
  </div>
);
export default InputTask;
