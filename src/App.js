import { useState } from 'react';
import './App.css';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [taskText, setTaskText] = useState("");
  const inputHandler = (e) => setTaskText(e.target.value);    
  const createTask = () => {
    if (taskText.length <= 3) {
      alert("Должно быть болше 3 символов")
    } else {
      setTasksList([
        ...tasksList,
        {id: Math.floor(Math.random() * 1000), text: taskText, done: false}
      ]);
      setTaskText("");
    }  
  }
  const deleteTask = (Id) => {
    setTasksList(tasksList.filter( el => el.id !== Id))
  };
  const toggleDone = (Id) => {
    setTasksList(tasksList.map( item => {
      if (item.id === Id) {
        return {
          ...item,
          done: !item.done
        }
      } return item     
    }))
  }
  console.log(tasksList);
  return (
    <div className="App">
      <section className="App__tasksList">
        <TaskList tasksList={tasksList} deleteTask={deleteTask} toggleDone={toggleDone} />  
      </section>
      <section className="App__input">
        <InputTask inputHandler={inputHandler} taskText={taskText} createTask={createTask}/>
      </section>      
    </div>
  );
}

export default App;
