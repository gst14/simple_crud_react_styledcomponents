import React from "react";
import styled from "styled-components";
import "boxicons";
const TaskListItem = ({ key, task }) => {
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
  `;

  const TaskListItemDetail = styled.h3`
    text-transform: uppercase;
  `;
  const BtnModif = styled.a`
    display: flex;
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 5px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    background-color: #f4a261;
  `;
  const BtnDelete = styled.a`
    color: #fff;
    display: flex;
    height: 35px;
    justify-content: center;
    align-items: center;
    width: 35px;
    border-radius: 5px;
    margin-left: 5px;
    text-decoration: none;
    cursor: pointer;
    background-color: #e76f51;
  `;

  const BtnArea = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  return (
    <TastItem>
      <TaskListItemDetail>{task}</TaskListItemDetail>
      <BtnArea>
        <BtnModif>
          <box-icon name="pencil" color='#ffffff'></box-icon>
        </BtnModif>
        <BtnDelete>
          <box-icon name="trash-alt" color='#ffffff'></box-icon>
        </BtnDelete>
      </BtnArea>
    </TastItem>
  );
};

export default TaskListItem;
