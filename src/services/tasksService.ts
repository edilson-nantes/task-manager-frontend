
import axios from "axios";

interface Task {
    id?: number;
    title: string;
    description: string;
    status: string;
}

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export async function fetchTasks(token: string) {
  try {
    const response = await api.get("/tasks", {
      headers: {
        Authorization: `${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createTask(token: string, task: Task) {
  try {
    console.log("token no service", token);
    
    const response = await api.post("/tasks",
      {
        title: task.title,
        description: task.description,
        status: task.status
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateTask(token: string, id: number, title: string, description: string, status: string) {
  try {
    const response = await api.put(`/tasks/${id}`,
      {
        title,
        description,
        status
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteTask(token: string, id: number) {
  try {
    const response = await api.delete(`/tasks/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}