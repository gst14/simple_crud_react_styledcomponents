import React from "react";
import styled from "styled-components";
const TaskListItem = ({ task }) => {
  const TastItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
    width: 90%;
    height: 40px;
    text-align: left;
    padding: 2px;
    background-color: #d84727;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    color: #fff;
    align-items: center;
    padding-right: 0.625rem;
    margin-bottom: 5px;
  `;

  const TaskListItemDetail = styled.h3`
    text-transform: uppercase;
  `;
  const BtnModif = styled.a`
    display: block;
    height: 35px;
    width: 35px;
    border-radius: 5px;
    margin-left: 5px;
    cursor: pointer;
    background-color: #21a179;
  `;
  const BtnDelete = styled.a`
    display: block;
    height: 35px;
    width: 35px;
    border-radius: 5px;
    margin-left: 5px;
    cursor: pointer;
    background-color: #d00000;
  `;

  const BtnArea = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  return (
    <TastItem>
      <TaskListItemDetail>{task}</TaskListItemDetail>
      <BtnArea>
        <BtnModif>Mod</BtnModif>
        <BtnDelete>Del</BtnDelete>
      </BtnArea>
    </TastItem>
  );
};

export default TaskListItem;
