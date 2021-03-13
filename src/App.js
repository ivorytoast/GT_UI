import './App.css';
import Table from './Table.js';
import Search from './Search.js';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Table />
      </header>
    </div>
  );
}

export default App;
