import React from 'react'

type PropsType = {
  inputHandler: () => void
  taskText: string
  createTask: () => void
}

const InputTask: React.FC<PropsType> = ({ inputHandler, taskText, createTask }) => (
  <div>
    <input type="text" placeholder="Ваша задача" value={taskText} onChange={inputHandler} />
    <button className="button" type="button" onClick={createTask}>Создать задачу</button>
  </div>
)
export default InputTask
