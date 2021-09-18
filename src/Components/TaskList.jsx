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

  // const generateNRandomTasks = (n = 7) => {
  //   return [...Array(n)].map((_, i) => `Task ${i + 1}`);
  // };
  // const [takslist, setTasklist] = useState([]);
  // const example = generateNRandomTasks();
  // useEffect(() => {
  //     setTasklist(example);
  // }, [])

  return (
    <TasksContainer>
      {taskList.map(({ id, desc }) => {
        return <TaskListItem key={id} task={desc} />;
      })}
    </TasksContainer>
  );
};

export default TaskList;
