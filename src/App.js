import { useState, useEffect } from 'react';
import '../src/css/App.css';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';
import Counter from './components/Counter';

function App() {
  // Состояние
  const [tasksList, setTasksList] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [doneCounter, setDoneCounter] = useState(0);
  const [taskCounter, setTaskCounter] = useState(0);
  const [complited, setComplited] = useState(null);
  const [uncomplited, setUncomplited] = useState(null);
  const [filter, setFilter] = useState("all")

  //Обработчики сосотояния
  useEffect(() => setDoneCounter(tasksList.filter( item => item.done === true).length), [tasksList]);
  useEffect(() => setTaskCounter(tasksList.filter( item => item.done === false).length), [tasksList]);
  useEffect(() => setComplited(tasksList.filter(item => item.done === true)), [tasksList]);
  useEffect(() => setUncomplited(tasksList.filter(item => item.done === false)), [tasksList]);  
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
  };
  const toggleFilter = (e) => setFilter(e.target.value); 
  
  //Тело приложения  
  return (
    <div className="App">
      <section className="App__counters">
        <div className="complited">
          <Counter value={doneCounter} label={"Заданий выполнено"} />
        </div>
        <div className="uncomplited">
          <Counter value={taskCounter} label={"Заданий нужно выполнить"} />
        </div>
      </section>
      <section className="App__tasksList">        
        <TaskList tasksList={tasksList} complited={complited} uncomplited={uncomplited} 
        filter={filter} deleteTask={deleteTask} toggleDone={toggleDone} />  
      </section>
      <section className="App__input">
        <InputTask inputHandler={inputHandler} taskText={taskText} createTask={createTask}/>
      </section>
      <section className="App__filters">
        <p>Фильтр:</p>
        <label>выполненые задания<input type="radio" name="tasks" value="complited" onChange={toggleFilter} /></label>
        <label>не выполненые задания<input type="radio" name="tasks" value="uncomplited" onChange={toggleFilter} /></label>
        <label>все задания<input type="radio" name="tasks" value="all" onChange={toggleFilter} defaultChecked /></label>
      </section>      
    </div>
  );
}
export default App;