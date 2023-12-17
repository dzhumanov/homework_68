import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { TaskListProps } from "../../types";
import { RootState } from "../../app/store";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const response = await axiosApi.get<TaskListProps>("todo.json");
  return response.data;
});

export const toggleTask = createAsyncThunk<void, string, { state: RootState }>(
  "tasks/toggleTask",
  async (taskId, thunkAPI) => {
    const currentState = thunkAPI.getState().tasks;
    if (currentState && currentState.tasks && currentState.tasks[taskId]) {
      const updatedTask = {
        ...currentState.tasks[taskId],
        isDone: !currentState.tasks[taskId].isDone,
      };
      await axiosApi.put(`todo/${taskId}.json`, updatedTask);
    }
  }
);

export const deleteTask = createAsyncThunk<void, string, { state: RootState }>(
  "tasks/deleteTask",
  async (taskId) => {
    await axiosApi.delete(`todo/${taskId}.json`);
  }
);

export const createNewTask = createAsyncThunk<
  void,
  undefined,
  { state: RootState }
>("tasks/newTask", async (_, thunkAPI) => {
  const task = thunkAPI.getState().tasks.newTask;
  await axiosApi.post("todo.json", task);
});
