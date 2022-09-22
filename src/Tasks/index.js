
import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul classNameName="tasks">
        {tasks.map(task => (
    <li
        classNameName={`tasks__item${
            task.done && hideDoneTasks
             ? "hidden" 
             : ""}`
}
    >
    <button className="tasks__button tasks__button--toggleDone">
            {task.done ? "✓" : ""}
        </button>
        <span className={
            `tasks__content${task.done ? " tasks__content--toggleDone" : ""}`
            }>
            {task.content}
        </span>
        <button className="tasks__button tasks__button--remove">
            🗑
        </button>
    </li>
    ))}
</ul>
);

export default Tasks;