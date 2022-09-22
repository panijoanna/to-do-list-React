import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
    tasks.length > 0 && (
        <div className="section__buttons">
         <button className="lists__button lists__button--hide">
             {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
         </button>
         <button
            className="lists__button"
            disabled={tasks.every(({ done }) => done)}
        >
            Ukończ wszystkie
         </button>
    </div>
)
);

export default Buttons;