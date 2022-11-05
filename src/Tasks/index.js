import { TasksList, Item, Content } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
  <TasksList>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDoneTasks}>
        <button
          className="tasks__button tasks__button--toggleDone"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </button>
        <Content done={task.done}>
          {task.content}
        </Content>
        <button
          className="tasks__button tasks__button--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </Item>
    ))}
  </TasksList>
);

export default Tasks;
