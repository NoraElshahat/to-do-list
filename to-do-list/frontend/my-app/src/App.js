import './App.css';
import Header from './component/header/Header';
import Tasks from './component/tasks/tasks';
import AddTask from './component/tasks/add_task_form';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Header}></Route>
        <Route path="/tasks" component={Tasks}></Route>
        <Route path="/add-task" component={AddTask}></Route>
      </Router>
    </div>
  );
}

export default App;
