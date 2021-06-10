import { useState, useEffect } from 'react';
import '../src/css/App.css';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [doneCounter, setDoneCounter] = useState(0);
  useEffect(() => setDoneCounter(tasksList.filter( item => item.done === true).length), [tasksList]);  
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
        };        
      } return item     
    }));    
  }
  
  
  return (
    <div className="App">
      <section className="App__tasksList">
        <input type="text" value={doneCounter} readOnly/>
        <TaskList tasksList={tasksList} deleteTask={deleteTask} toggleDone={toggleDone} />  
      </section>
      <section className="App__input">
        <InputTask inputHandler={inputHandler} taskText={taskText} createTask={createTask}/>
      </section>      
    </div>
  );
}

export default App;
