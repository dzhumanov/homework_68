import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axiosApi from "../../axiosApi";
import { TaskListProps } from "../../types";

export const fetchTasks = createAsyncThunk('tasks/fetch', async() => {
    const response = await axiosApi.get<TaskListProps>('todo.json');
    return response.data;
});