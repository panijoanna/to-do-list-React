import { useState, useRef, FormEventHandler } from "react";
import { StyledForm, Input, FormButton } from "./styled";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice.js";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const onFormSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    if (inputRef.current) {
      inputRef.current.focus()
    };
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        ref={inputRef}
        required
        type="text"
        name="lista"
        placeholder="Dodaj zadanie..."
        maxLength={70}
        autoComplete="off"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton>Dodaj zadanie</FormButton>
    </StyledForm>
  );
};

export default Form;
