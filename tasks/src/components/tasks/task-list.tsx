import { useAppSelector } from '../../hooks';
import Task from './task';
import './task-list.css';

const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks.entities);

  return (
    <section className="task-list">
      <h3>Tasks List:</h3>
      <div className="task-list__content">
        {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
      </div>
    </section>
  );
};

export default TaskList;
