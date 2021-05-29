import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([{ id: 0, task: 'Wake up at 5 a.m.'}]);

  const addList = (e) => {
    if (e.key==='Enter') {
      e.preventDefault();
      setList([...list,{ id: list.length, task: e.target.value }])
      e.target.value = ''
    }
  }

  const listItems = list.map((x) =>
    <li key={x.id.toString()}>{x.task}</li>
  )

  return (
    <div className="App">
      <header className="App-header">
        <p>
          To-do List
        </p>
        <ul>
          {listItems}
        </ul>
        <input type="text" placeholder="Insert new task" onKeyPress={addList} />
      </header>
    </div>
  );
}

export default App;
