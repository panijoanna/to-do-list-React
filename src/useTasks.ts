import { useEffect, useState } from "react";
import { Tasks } from "./types";

const getTasks = (): Tasks[] => {
  const localStorageTasks = localStorage.getItem("tasks");

  return localStorageTasks ? JSON.parse(localStorageTasks) : [];
};

export const useTasks = () => {
  const [tasks, setTasks] = useState<Tasks[]>(getTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id: number): void => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id: number): void => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        
        return task;
      })
    );
  };

  const toggleAllTaskDone = (): void => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addTask = (content: string): void => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id as number + 1,
      } as Tasks,
    ]);
  };

  return {
    tasks,
    removeTask,
    toggleAllTaskDone,
    toggleTaskDone,
    addTask,
  };
};
