import { fetchExampleTasks, load } from "../../tasks/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { ListsButton } from "../../tasks/Buttons/styled";

const Button = () => {
  const dispatch = useDispatch();
  const loading = useSelector(load);

  return (
    <ListsButton disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {loading ? "Trwa ładowanie..." : "Pobierz przykładowe zadania"}
    </ListsButton>
  );
};

export default Button;
