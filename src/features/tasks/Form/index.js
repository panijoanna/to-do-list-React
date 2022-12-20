import { useState, useRef } from "react";
import { StyledForm, Input, FormButton } from "./styled";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice.js"

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        ref={inputRef}
        required
        type="text"
        name="lista"
        placeholder="Co jest do zrobienia?"
        maxLength="70"
        autoComplete="off"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton>Dodaj zadanie</FormButton>
    </StyledForm>
  );
};

export default Form;
