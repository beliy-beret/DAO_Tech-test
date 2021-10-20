import React from 'react'

type PropsType = {
  text: string
  deleteTask: (ID: number) => void
  Id: number
  toggleDone: (ID: number) => void
  done: boolean
}
const Task: React.FC<PropsType> = ({
  text, deleteTask, Id, toggleDone, done,
}) => (
  <div className="tasks-list__element">
    <p className={done ? 'done' : 'p'} onClick={() => toggleDone(Id)} role="presentation">
      {text}
    </p>
    <button className="button" type="button" onClick={() => deleteTask(Id)}>Удалить задачу</button>
  </div>
)
export default Task
