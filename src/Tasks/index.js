import "./style.css";
import { TasksList, Item } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
  <TasksList>
    {tasks.map((task) => (
      <Item
        key={task.id}
        hidden={task.done && hideDoneTasks}
      >
        <button
          className="tasks__button tasks__button--toggleDone"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </button>
        <span
          className={`tasks__content${
            task.done ? " tasks__content--toggleDone" : ""
          }`}
        >
          {task.content}
        </span>
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
