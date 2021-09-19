import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const TaskInput = ({ current, setCurrent, taskList }) => {
  const [description, setDescription] = useState("");

  const [taskInput, settaskInput] = useState({});

  useEffect(() => {
    if (current) {
      settaskInput(current);
      setDescription(current.desc);
    }
  }, [taskInput]);

  const FormContainer = styled.form`
    grid-area: detail;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 200px;
    justify-content: space-between;
    align-items: center;
    oveflow: hidden;
    padding-botton: 30px;
    border: 1px solid #000;
    border-radius: 5px;
  `;

  const TextTask = styled.input`
    width: 90%;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    height: 40px;
  `;

  const BtnSaved = styled.button`
    position: relative;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    cursor: pointer;
    color: #fff;
    background-color: #000;
    top: -20px;
    width: 90%;
    height: 40px;
  `;

  const submitTask = (e) => {
    e.preventDefault();
    taskList((list) => {
      return [...list, {id: nanoid(), desc: description}];
    });
  };

  return (
    <FormContainer onSubmit={submitTask}>
      <h3>Add Task</h3>
      <TextTask
        key={nanoid()}
        type="text"
        autoFocus="autoFocus"
        required
        placeholder="Type a description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></TextTask>
      <BtnSaved type="submit">Save</BtnSaved>
    </FormContainer>
  );
};

export default TaskInput;
