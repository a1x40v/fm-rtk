import { useAppSelector, useTasks } from '../../hooks';
import Task from './task';
import './task-list.css';

const TaskList = () => {
  const [tasks, loading] = useTasks();

  return (
    <section className="task-list">
      <h3>Tasks List:</h3>
      <div className="task-list__content">
        {loading ? <p>LOADING...</p> : null}
        {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
      </div>
    </section>
  );
};

export default TaskList;
