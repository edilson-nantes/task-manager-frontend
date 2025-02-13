
import axios from "axios";

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

export async function createTask(token: string, title: string, description: string, status: string) {
  try {
    const response = await api.post("/tasks",
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