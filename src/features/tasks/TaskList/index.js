import { List, Item, Content, Button } from "./styled";
import { useSelector } from "react-redux";

const TaskList = ({ removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item 
        key={task.id} 
        hidden={task.done && hideDoneTasks}>
        <Button 
          toggleDone 
          onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </Button>
        <Content 
          done={task.done}>
          {task.content}
          </Content>
        <Button 
          remove 
          onClick={() => removeTask(task.id)}>
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default TaskList;
