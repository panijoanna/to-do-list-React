import { ListsButton, SectionButton } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, hideTasks, toggleAllTaskDone }) =>
  tasks.length > 0 && (
    <SectionButton>
      <ListsButton 
        onClick={hideTasks} 
        >
        {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
      </ListsButton>
      <ListsButton
        onClick={toggleAllTaskDone}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </ListsButton>
    </SectionButton>
  );

export default Buttons;
