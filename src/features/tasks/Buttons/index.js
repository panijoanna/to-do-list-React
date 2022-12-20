import { ListsButton, SectionButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, hideTasks } from "../tasksSlice";

const Buttons = ({ toggleAllTaskDone }) => {
  const { tasks, hideDoneTasks } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    tasks.length > 0 && (
      <SectionButton>
        <ListsButton onClick={() => dispatch(hideTasks())}>
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
