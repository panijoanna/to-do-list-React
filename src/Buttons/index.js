import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, hideTasks, toggleAllTaskDone }) => (
    tasks.length > 0 && (
    <div className="section__buttons">
        <button onClick={hideTasks} className="lists__button">
            {hideDoneTasks
                ? "Pokaż ukończone"
                : "Ukryj ukończone"}
        </button>
        <button 
            onClick={toggleAllTaskDone}
            className="lists__button" 
            disabled={tasks.every(({ done }) => done)}
            >
            Ukończ wszystkie
        </button>
    </div>
));

export default Buttons;