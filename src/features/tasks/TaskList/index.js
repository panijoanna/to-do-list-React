import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHideDoneTasks,
  selectTasks,
  toggleTaskDone,
  removeTask,
  selectTaskByQuery,
} from "../tasksSlice";
import { useQueryParameter } from "../queryParameters";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector(state => selectTaskByQuery(state, query));
  const hideDoneTasks = useSelector(selectHideDoneTasks);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDoneTasks}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>{task.content}</Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
