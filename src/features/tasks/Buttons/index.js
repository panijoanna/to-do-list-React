import { ListsButton, SectionButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  hideTasks,
  selectEmptyTasks,
  selectEveryDoneTasks,
  selectHideDoneTasks,
  toggleAllTaskDone,
  fetchExampleTasks,
} from "../tasksSlice.js";

const Buttons = () => {
  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const areTasksEmpty = useSelector(selectEmptyTasks);
  const areTasksDone = useSelector(selectEveryDoneTasks);

  const dispatch = useDispatch();

  return (
    <>
      <ListsButton onClick={() => dispatch(fetchExampleTasks())}>Pobierz przykładowe zadania</ListsButton>
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
