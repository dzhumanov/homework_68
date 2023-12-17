import { createSlice } from "@reduxjs/toolkit";
import { TaskListProps } from "../../types";

interface TaskState {
    tasks: TaskListProps | null;
}

const initialState:TaskState = {
    tasks: null,
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{

    }
});

export const taskReducer = taskSlice.reducer;
// export const {} = taskSlice.actions;