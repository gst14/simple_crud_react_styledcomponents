import React from "react";
import styled from "styled-components";
import TaskListItem from "./TaskListItem";
const TaskList = ({
  taskList,
  editMode,
  setEditMode,
  setCurrent,
  current,
  setTaskList,
}) => {
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
    box-shadow: 0.6px 0.5px 0.9px rgba(0, 0, 0, 0.018),
      2.4px 1.8px 2.2px rgba(0, 0, 0, 0.028),
      6px 4.6px 4.1px rgba(0, 0, 0, 0.036),
      13px 9.9px 7.4px rgba(0, 0, 0, 0.042),
      27.8px 21.2px 13.8px rgba(0, 0, 0, 0.047),
      71px 54px 33px rgba(0, 0, 0, 0.04);
  `;

  return (
    <TasksContainer>
      {taskList.length !== 0 ? (
        taskList.map(({ id, desc }) => {
          return (
            <TaskListItem
              key={id}
              id={id}
              editMode={editMode}
              setEditMode={setEditMode}
              setCurrent={setCurrent}
              task={desc}
              currentTask={current}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          );
        })
      ) : (
        <NoTaskItem>No hay tareas</NoTaskItem>
      )}
    </TasksContainer>
  );
};

export default TaskList;
