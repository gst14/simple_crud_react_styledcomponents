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
  return (
    <TasksContainer>
      {taskList.map(({ id, desc }) => {
        return <TaskListItem key={id} task={desc} />;
      })}
    </TasksContainer>
  );
};

export default TaskList;
