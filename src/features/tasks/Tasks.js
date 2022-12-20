import { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const { tasks } = useSelector(selectTasks);

  const { removeTask, toggleAllTaskDone, toggleTaskDone, addTask } =
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
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            toggleAllTaskDone={toggleAllTaskDone}
          />
        }
      />
    </>
  );
}

export default Tasks;
