import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { TaskListProps } from "../../types";
import { RootState } from "../../app/store";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const response = await axiosApi.get<TaskListProps>("todo.json");
  return response.data;
});

export const createNewTask = createAsyncThunk<
  void,
  undefined,
  { state: RootState }
>("tasks/newTask", async (_, thunkAPI) => {
  const task = thunkAPI.getState().tasks.newTask;
  await axiosApi.post("todo.json", task);
});
