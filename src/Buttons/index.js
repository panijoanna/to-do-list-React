import { ListsButton } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, hideTasks, toggleAllTaskDone }) =>
  tasks.length > 0 && (
    <div className="section__buttons">
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
    </div>
  );

export default Buttons;
