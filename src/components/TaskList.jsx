import React from 'react';
import Task from './Task';

const TaskList = ({
  tasksList, complited, uncomplited, filter, deleteTask, toggleDone,
}) => {
  let tasks = [];
  if (filter === 'all') {
    tasks = tasksList.map(
      (task) => (
        <Task
          key={task.id}
          Id={task.id}
          text={task.text}
          done={task.done}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
        />
      ),
    );
  } else if (filter === 'complited') {
    tasks = complited.map((task) => (
      <Task
        key={task.id}
        Id={task.id}
        text={task.text}
        done={task.done}
        deleteTask={deleteTask}
        toggleDone={toggleDone}
      />
    ));
  } else if (filter === 'uncomplited') {
    tasks = uncomplited.map((task) => (
      <Task
        key={task.id}
        Id={task.id}
        text={task.text}
        done={task.done}
        deleteTask={deleteTask}
        toggleDone={toggleDone}
      />
    ));
  }

  return (
    <div className="tasks-list">
      {tasksList.length < 1 ? 'Здесь будут ваши задачи' : tasks}
    </div>
  );
};
export default TaskList;
