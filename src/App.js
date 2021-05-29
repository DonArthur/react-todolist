import './App.css';
import { useState } from 'react';

function App() {
  const [lists, setList] = useState([{ id: 0, task: 'Wake up at 5 a.m.'}]);

  const addTask = (e) => {
    if (e.key==='Enter') {
      e.preventDefault();
      setList([...lists,{ id: lists.length, task: e.target.value }])
      e.target.value = ''
    }
  }

  const listItems = lists.map((x) =>
    <li key={x.id.toString()}>
      {x.task} <button onClick={() => {
        let newLists = lists.filter(list => list.id !== x.id);
        setList(newLists);
      }}>Done</button>
    </li>
  )

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          To-do List
        </h2>
      </header>
      <div className="App-body">
        <ul>
          {lists.length > 0 ? listItems : 'Your todo list is empty, add one now'}
        </ul>
        <input type="text" placeholder="Insert new task" onKeyPress={addTask} />
      </div>
    </div>
  );
}

export default App;
