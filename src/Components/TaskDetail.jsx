import { nanoid } from "nanoid";
import React, { useState } from "react";
import styled from "styled-components";
const TaskInput = ({taskList}) => {
  const [description, setDescription] = useState("");
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

  const submitTask = (e) => {
    e.preventDefault();
    taskList( list=>{
        return [...list,{id: nanoid(), desc: description}]
    } )
  };

  const BtnSaved = styled.button`
    position: relative;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    cursor: pointer;
    color: #fff;
    background-color: #7ac74f;
    top: -20px;
    width: 90%;
    height: 40px;
  `;
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
      {/* <TaskDesc /> */}
      <BtnSaved type="submit">Save</BtnSaved>
    </FormContainer>
  );
};

export default TaskInput;
