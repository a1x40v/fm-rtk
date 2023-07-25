import React from 'react';
import { useAppDispatch } from '../../hooks';
import { removeTask } from '../../features/tasks/tasks-slice';
import './task.css';

interface Props {
  task: Task;
}

const Task: React.FC<Props> = ({ task }) => {
  const dispath = useAppDispatch();

  return (
    <div className="task">
      <header className="task__header">
        <span className="task__title">{task.title}</span>
      </header>
      <button
        className="task__btn-remove"
        onClick={() => {
          dispath(removeTask(task.id));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Task;
