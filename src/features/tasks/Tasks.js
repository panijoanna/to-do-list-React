import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Navigation from "../../Navigation";
import SearchInput from "../taskFilter/SearchInput";
import Button from "../taskFilter/Button";

function Tasks() {
  return (
    <>
      <Navigation />
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<Button />}
      />
      <Section title="Wyszukaj zadania" body={<SearchInput />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </>
  );
}

export default Tasks;
