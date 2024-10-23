import { ListsButton, SectionButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  hideTasks,
  selectEmptyTasks,
  selectEveryDoneTasks,
  selectHideDoneTasks,
  toggleAllTaskDone,
} from "../tasksSlice";

const Buttons = () => {
  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const areTasksEmpty = useSelector(selectEmptyTasks);
  const areTasksDone = useSelector(selectEveryDoneTasks);

  const dispatch = useDispatch();

  return (
    <>
      {!areTasksEmpty && (
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
      )}
    </>
  );
};

export default Buttons;
