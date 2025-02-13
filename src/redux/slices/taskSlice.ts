import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "../../services/tasksService";


interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
}

interface TaskState {
    tasks: Task[];
    loading: boolean;
    error: string | null;   
}

const initialState: TaskState = {
    tasks:[],
    loading: false,
    error: null
}

export const loadTasks = createAsyncThunk('tasks/fetchTasks', async (token: string) => {
    const response = await fetchTasks(token);
    return response;
});

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadTasks.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.loading = false;
            })
            .addCase(loadTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks';
            });
    }
});

//export const { setTasks } = taskSlice.actions;
export default taskSlice.reducer;