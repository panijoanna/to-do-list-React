import { fetchExampleTasks } from "../../tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { ListsButton } from "../../tasks/Buttons/styled";

const Button = () => {
    const dispatch = useDispatch();
    return (
      <ListsButton onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </ListsButton>
    );
  };