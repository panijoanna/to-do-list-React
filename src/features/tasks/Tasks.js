import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";

function Tasks() {

  const { removeTask, toggleAllTaskDone, toggleTaskDone, addTask } = useTasks();

  return (
    <>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form/>} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </>
  );
}

export default Tasks;
