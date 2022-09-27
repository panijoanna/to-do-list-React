import "./style.css";

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => (
    tasks.length > 0 && (
    <div className="section__buttons">
        <button onClick={toggleHideDone} className="lists__button">
            {hideDone
                ? "Pokaż ukończone"
                : "Ukryj ukończone"}
        </button>
        <button 
            onClick={setAllDone}
            className="lists__button" 
            disabled={tasks.every(({done}) => done)}
            >
            Ukończ wszystkie
        </button>
    </div>
));

export default Buttons;