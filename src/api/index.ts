import axios from 'axios';
import { Task, TaskId } from '../types';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getAll = async () => {
  const result = await instance.get('todos');
  return result.data;
};

export const addTodo = async (label: string) => {
  const result = await instance.post('/todos', {
    label,
    done: false,
  });
  return result.data;
};

export const updateTodoDone = async (todoToChange: Task, done: boolean) => {
  const result = await instance.put(`/todos/${todoToChange.id}`, {
    ...todoToChange,
    done,
  });
  return result.data
};

export const deleteTodo = async (todoId: TaskId) => {
  const result = await instance.delete(`/todos/${todoId}`);
  return result.data;
};