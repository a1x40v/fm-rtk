import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { addTask } from '../../features/tasks/tasks-slice';

const CreateTask = () => {
  const [newTasktitle, setNewTasktitle] = useState('');
  const dispatch = useAppDispatch();

  return (
    <form
      className="create-task"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTask({ title: newTasktitle }));
      }}
    >
      <label htmlFor="new-task-title">
        Title
        <input
          id="new-task-title"
          type="text"
          value={newTasktitle}
          onChange={(e) => setNewTasktitle(e.target.value)}
        />
      </label>
    </form>
  );
};

export default CreateTask;
