import { ListsButton, SectionButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, hideTasks, selectEmptyTasks, selectEveryDoneTasks, selectHideDoneTasks } from "../tasksSlice.js";

const Buttons = ({ toggleAllTaskDone }) => {

const hideDoneItemTasks = useSelector(selectHideDoneTasks);
const areTasksEmpty = useSelector(selectEmptyTasks);
const areTasksDone = useSelector(selectEveryDoneTasks);

  const { tasks, hideDoneTasks } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <SectionButton>
        <ListsButton onClick={() => dispatch(hideTasks())}>
          {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
        </ListsButton>
        <ListsButton
          onClick={() => dispatch(toggleAllTaskDone())}
          disabled={areTasksDone}
        >
          Ukończ wszystkie
        </ListsButton>
      </SectionButton>
    )
  );
};

export default Buttons;
