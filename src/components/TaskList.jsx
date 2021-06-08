import React from 'react'
import Task from './Task'

const TaskList = ({tasksList}) => {
    const tasks = tasksList.map( task => <Task key={task.id} text={task.text} />)    
    return (
        <div className="taskslist">
            {tasks}
        </div>
    )
}
export default TaskList;