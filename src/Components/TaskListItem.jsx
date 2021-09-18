import React from 'react'
import styled from 'styled-components';
const TaskListItem = ({task}) => {
    const TastItem = styled.div`
    display: flex;
    margin-top:5px;
    justify-content: center;
    align-content: center;
    border-radius: 5px;
    width: 90%;
    height: 40px;
    text-align: left;
    padding: 2px;
    background-color: #D84727;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    color: #fff;
  `;
    return (
        <TastItem >
            {task}
        </TastItem>
    )
}

export default TaskListItem
