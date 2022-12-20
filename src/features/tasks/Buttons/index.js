import { ListsButton, SectionButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = ({ toggleAllTaskDone }) => {
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
