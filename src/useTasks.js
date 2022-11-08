import { useEffect, useState } from "react";

const getTasks = () => {
   const localStorageTasks = localStorage.getItem("tasks");

        return localStorageTasks
        ? JSON.parse(localStorageTasks)
        : []
};

export const useTasks = () => {
    const [tasks, setTasks] = useState(getTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);
    
      const removeTask = (id) => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
      };
    
      const toggleTaskDone = (id) => {
        setTasks((tasks) =>
          tasks.map((task) => {
            if (task.id === id) {
              return { ...task, done: !task.done };
            }
    
            return task;
          })
        );
      };
    
      const toggleAllTaskDone = () => {
        setTasks((tasks) =>
          tasks.map((task) => ({
            ...task,
            done: true,
          }))
        );
      };
    
      const addTask = (content) => {
        setTasks((tasks) => [
          ...tasks,
          {
            content,
            done: false,
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
          },
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