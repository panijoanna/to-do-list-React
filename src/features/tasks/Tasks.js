import Form from "./Form";
import TaskList from "./TasksPage/TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Navigation from "../../Navigation";

function Tasks() {
  return (
    <>
      <Navigation />
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </>
  );
}

export default Tasks;
