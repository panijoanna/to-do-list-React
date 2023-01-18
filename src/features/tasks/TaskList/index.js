import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectHideDoneTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { selectTaskByQuery } from "../tasksSlice";
import { useLocation } from "react-router-dom";
import { StyledLink } from "../../../Navigation/styled";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("szukaj");

  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const hideDoneTasks = useSelector(selectHideDoneTasks);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDoneTasks}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <StyledLink to={`/szczegóły/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
