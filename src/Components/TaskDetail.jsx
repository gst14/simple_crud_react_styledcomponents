import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const TaskInput = ({
  current,
  setCurrent,
  editMode,
  setEditMode,
  taskList,
  setTaskList,
}) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (current) {
      setDescription(current.desc);
    }
  }, []);

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
    box-shadow: 0.6px 0.5px 0.9px rgba(0, 0, 0, 0.018),
      2.4px 1.8px 2.2px rgba(0, 0, 0, 0.028),
      6px 4.6px 4.1px rgba(0, 0, 0, 0.036),
      13px 9.9px 7.4px rgba(0, 0, 0, 0.042),
      27.8px 21.2px 13.8px rgba(0, 0, 0, 0.047),
      71px 54px 33px rgba(0, 0, 0, 0.04);
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
    background-color: #01151c;
    top: -20px;
    width: 90%;
    height: 40px;
  `;

  const submitTask = (e) => {
    if (editMode) {
      editTask();
    } else {
      e.preventDefault();
      setEditMode(false);
      setTaskList((list) => {
        return [...list, { id: nanoid(), desc: description }];
      });
      setEditMode(false);
      setCurrent({});
    }
  };

  const editTask = () => {
    const indexToModify = taskList.findIndex((task) => task.id === current.id);
    let updatedtasks = [...taskList];
    updatedtasks[indexToModify] = {
      id: current.id,
      desc: description,
    };
    setTaskList(updatedtasks);
    setEditMode(false);
    setCurrent({});
  };

  return (
    <FormContainer onSubmit={submitTask}>
      <h3>{editMode ? "Edit task" : "Add Task"}</h3>
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
