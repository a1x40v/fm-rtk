import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';
import data from '../../api/data.json';
import { removeUser } from '../users/users-slice';

export type TasksState = {
  entities: Task[];
  loading: boolean;
};

type DraftTask = RequireOnly<Task, 'title'>;

export const createTask = (draftTask: DraftTask): Task => {
  return { id: nanoid(), ...draftTask };
};

const initialState: TasksState = {
  entities: [],
  loading: false,
};

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (): Promise<Task[]> => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    return data;
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTask: (state, action: PayloadAction<Task['id']>) => {
      const index = state.entities.findIndex(
        (task) => task.id === action.payload
      );
      state.entities.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      const userUd = action.payload;
      for (const task of state.entities) {
        if (task.user === userUd) {
          task.user = undefined;
        }
      }
    });

    builder.addCase(fetchTasks.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
