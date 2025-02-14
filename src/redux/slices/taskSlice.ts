import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTask, deleteTask, editTask, fetchTasks } from "../../services/tasksService";
import { Task } from "../../types/task";

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

export const addTask = createAsyncThunk('tasks/addTask', async ({ token, task }: { token: string, task: Task }) => {
    const response = await createTask(token, task);
    return response;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async ({ token, task }: { token: string, task: Task }) => {
    const response = await editTask(token, task);
    return response;
})

export const dropTask = createAsyncThunk('tasks/deleteTask', async ({ token, id }: { token: string, id: number }) => {
    const response = await deleteTask(token, id);
    return response;
})

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
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            })
            .addCase(addTask.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to add task';
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
                if (taskIndex !== -1) {
                    state.tasks[taskIndex] = action.payload;
                }
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to update task';
            })
            .addCase(dropTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
            })
            .addCase(dropTask.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to delete task';
            });
    }
});

//export const { setTasks } = taskSlice.actions;
export default taskSlice.reducer;