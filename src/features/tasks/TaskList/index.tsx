import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectHideDoneTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { selectTaskByQuery } from "../tasksSlice";
import { useLocation } from "react-router-dom";
import { StyledLink } from "../../../Navigation/styled";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TasksState } from "../../../types";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("szukaj");

  const tasks = useSelector((state: { tasks: TasksState }) =>
    selectTaskByQuery(state, query)
  );
  const hideDoneTasks = useSelector(selectHideDoneTasks);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task: any) => (
        <Item key={task.id} hidden={task.done && hideDoneTasks}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? <Icon icon="weui:done-filled" /> : ""}
          </Button>
          <Content done={task.done}>
            <StyledLink to={`/szczegóły/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            <Icon icon="bitcoin-icons:cross-filled" />
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
