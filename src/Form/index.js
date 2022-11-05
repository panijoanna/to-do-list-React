import { useState, useRef, useEffect } from "react";
import { FormElement, Input, FormButton } from "./styled";

const Form = ({ addTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        ref={inputRef}
        className="form__field"
        required
        type="text"
        name="lista"
        placeholder="Co jest do zrobienia?"
        maxLength="70"
        autoComplete="off"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
