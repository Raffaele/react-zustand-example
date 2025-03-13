import { create } from 'zustand';
import { getAll, addTodo, updateTodoDone, deleteTodo } from '../api';
import type { Task, TaskId } from '../types';

type State = {
  tasks: Task[],
  isReady: boolean,
  isLoading: boolean,
  init: () => Promise<void>,
  addTask: (label: string) => Promise<void>;
  updateTaskDone: (task: Task, done: boolean) => Promise<void>;
  deleteTask: (taskId: TaskId) => Promise<void>;
};

export const useTodoStore = create<State>((set) => ({
  tasks: [],
  isReady: false,
  isLoading: false,
  init: async () => {
    const tasks = await getAll();
    set({ tasks, isReady: true });
  },
  addTask: async (label) => {
    set({ isLoading: true });

    const newTask = await addTodo(label);
    set(status => ({
      isLoading: false,
      tasks: [...status.tasks, newTask]
    }));
  },
  updateTaskDone: async (todo: Task, done: boolean) => {
    const result = await updateTodoDone(todo, done);
    set(status => ({
      tasks: status.tasks.map(singleTask => ({ ...singleTask, done: singleTask === todo ? result.done : singleTask.done }))
    }));
  },
  deleteTask: async (taskId: TaskId) => {
    await deleteTodo(taskId);
    set(status => ({
      tasks: status.tasks.filter(singleTask => singleTask.id !== taskId)
    }))
  }
}));