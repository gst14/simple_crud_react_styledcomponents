import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import TaskListItem from "./TaskListItem";
const TaskList = ({ taskList }) => {
  const TasksContainer = styled.div`
    grid-area: tasks;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  `;

  const NoTaskItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    width: 90%;
    height: 40px;
    text-align: left;
    padding: 2px;
    background-color: #000;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    color: #fff;
    align-items: center;
    padding-right: 0.625rem;
    margin-bottom: 5px;
  `;
  return (
    <TasksContainer>
      {taskList.length===0 ? (
        <NoTaskItem>No hay tareas</NoTaskItem>
      ) : (
        taskList.map(({ id, desc }) => {
          return <TaskListItem key={id} task={desc} />;
        })
      )}
    </TasksContainer>
  );
};

export default TaskList;
