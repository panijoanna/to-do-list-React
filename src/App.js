import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { useTasks } from "./useTasks";

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const hideTasks = () => {
    setHideDoneTasks((hideDoneTasks) => !hideDoneTasks);
  };

  const { tasks, removeTask, toggleAllTaskDone, toggleTaskDone, addTask } =
    useTasks();

  return (
    <>
      <Header title="Lista zadań" />
      <Section 
        title="Dodaj nowe zadanie" 
        body={<Form addTask={addTask} />} 
      />

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
