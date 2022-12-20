import { ListsButton, SectionButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks } from "../tasksSlice";

const Buttons = ({ toggleAllTaskDone }) => {
  const { tasks, hideDoneTasks } = useSelector(selectTasks);
  return (
    tasks.length > 0 && (
      <SectionButton>
        <ListsButton onClick={hideTasks}>
          {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
        </ListsButton>
        <ListsButton
          onClick={toggleAllTaskDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </ListsButton>
      </SectionButton>
    )
  );
};

export default Buttons;
