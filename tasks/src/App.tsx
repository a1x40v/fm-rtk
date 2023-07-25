import CreateTask from './components/tasks/create-task';
import TaskList from './components/tasks/task-list';

function App() {
  return (
    <div>
      <TaskList />
      <hr />
      <CreateTask />
    </div>
  );
}

export default App;
