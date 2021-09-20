import React from "react";
import styled from "styled-components";
import "boxicons";
import "animate.css";
const TaskListItem = ({
  id,
  task,
  setCurrent,
  editMode,
  setEditMode,
  currentTask,
  taskList,
  setTaskList,
}) => {
  const TastItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
    width: 90%;
    height: 40px;
    text-align: left;
    padding: 2px;
    background-color: #264653;
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
      71px 54px 33px rgba(0, 0, 0, 0.04); ;
  `;

  const TaskListItemDetail = styled.h3`
    margin-left: 30px;
  `;
  const BtnModif = styled.a`
    // display: flex;
    display: ${editMode && (id === currentTask.id)? "none" : "flex"};
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    background-color: #fdbb17;
  `;
  const BtnDelete = styled.a`
    // display: flex;
    display: ${editMode && (id === currentTask.id)? "none" : "flex"};
    color: #fff;
    height: 35px;
    justify-content: center;
    align-items: center;
    width: 35px;
    border-radius: 5px;
    margin-left: 5px;
    text-decoration: none;
    cursor: pointer;
    background-color: #fd3f17;
  `;
  const BtnCancel = styled.a`
  // display: flex;
  display: ${editMode && (id === currentTask.id)? "flex" : "none"};
    color: #fff;
    height: 35px;
    justify-content: center;
    align-items: center;
    width: 35px;
    border-radius: 5px;
    margin-left: 5px;
    text-decoration: none;
    cursor: pointer;
    background-color: #fd3f17;
  `;

  const BtnArea = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  return (
    <TastItem>
      <TaskListItemDetail className="animate__bounceIn">
        {task}
      </TaskListItemDetail>
      <BtnArea>
        <BtnModif
          onClick={() => {
            const filter = taskList.find((task) => task.id === id);
            setCurrent(filter);
            setEditMode(true);
            console.log(editMode);
          }}
        >
          <box-icon name="pencil" color="#ffffff"></box-icon>
        </BtnModif>
        <BtnDelete
          onClick={() => {
            const filter = taskList.filter((task) => task.id !== id);
            setTaskList(filter);
            setEditMode(false);
            setCurrent({});
          }}
        >
          <box-icon name="trash-alt" color="#ffffff"></box-icon>
        </BtnDelete>
        <BtnCancel
          onClick={(e) => {
            const filter = taskList.filter((task) => task.id !== id);
            setEditMode(false);
            setCurrent({});
          }}
        >
          <box-icon name="x-circle" color="#ffffff"></box-icon>
        </BtnCancel>
      </BtnArea>
    </TastItem>
  );
};

export default TaskListItem;
