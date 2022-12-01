import { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";
import { useSelector } from "react-redux";

function Tasks() {
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
          <TaskList
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

export default Tasks;
