import { useState, useEffect } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const tasksDataStorage = localStorage.getItem("tasks");

  const [tasks, setTasks] = useState(
    tasksDataStorage ? JSON.parse(tasksDataStorage) : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const hideTasks = () => {
    setHideDoneTasks((hideDoneTasks) => !hideDoneTasks);
  };

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

  return (
    <>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form addTask={addTask} />} />

      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            hideTasks={hideTasks}
            toggleAllTaskDone={toggleAllTaskDone}
          />
        }
      />
    </>
  );
}

export default App;
