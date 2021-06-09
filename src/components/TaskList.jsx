import React from 'react'
import Task from './Task'

const TaskList = ({tasksList, deleteTask, toggleDone}) => {
    const tasks = tasksList.map( task => <Task key={task.id} Id={task.id} text={task.text} deleteTask={deleteTask} toggleDone={toggleDone} />)    
    return (
        <div className="tasks-list">
            {tasks}
        </div>
    )
}
export default TaskList;