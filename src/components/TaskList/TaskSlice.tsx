import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskListProps } from "../../types";
import { fetchTasks } from "./TaskThunks";

interface TaskState {
  tasks: TaskListProps | null;
  isLoading: boolean;
  isError: boolean;
  newTask: {
    title: string;
    isDone: boolean;
  },
}

const initialState: TaskState = {
  tasks: null,
  isLoading: false,
  isError: false,
  newTask: {
    title: '',
    isDone: false,
  }
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    newTask: (state, action: PayloadAction<string>) => {
        state.newTask.title = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export const taskReducer = taskSlice.reducer;
export const {newTask} = taskSlice.actions;
