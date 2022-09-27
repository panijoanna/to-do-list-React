import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form 
            className="form"
            onSubmit={onFormSubmit}
            >
            <input
                value={newTaskContent}
                className="form__field"
                required
                type="text"
                name="lista"
                placeholder="Co jest do zrobienia?"
                maxLength="70"
                autoComplete="off"
                onChange={({ target }) => setNewTaskContent(target.value)}
                />
            <button 
                className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;
