import { useState } from 'react';
import './App.css';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [taskText, setTaskText] = useState("");
  const inputHandler = (e) => setTaskText(e.target.value);    
  const createTask = () => {
    if (taskText.length < 5) {
      alert("Должно быть не менее 5 символов")
    } else {
      setTasksList([
        ...tasksList,
        {id: Math.floor(Math.random() * 1000), text: taskText, done: false}
      ]);
      setTaskText("");
    }  
  }
  
  return (
    <div className="App">
      <section className="App__tasksList">
        <TaskList tasksList={tasksList} />  
      </section>
      <section className="App__input">
        <InputTask inputHandler={inputHandler} taskText={taskText} createTask={createTask}/>
      </section>      
    </div>
  );
}

export default App;
