import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import styled from "styled-components";
import TaskDetail from "./Components/TaskDetail";
import TaskList from "./Components/TaskList";
function App() {
  const [taskList, setTaskList] = useState([]);
  const [editMode, setEditMode] = useState(false)
  const [currentTask, setCurrentTask] = useState({})
  
  const Container = styled.div`
    display: grid;
    height: 100vh;
    grid-template-areas:
      "title title"
      "tasks detail";
    grid-template-columns: 2fr 1fr;
    box-sizing: border-box;
    grid-template-rows: 10vh minmax(80vh, 90vh);
  `;
  const generateNRandomTasks = (n = 10) => {
    return [...Array(n)].map((_, i) => {
      return { id: nanoid(), desc: `Task ${i + 1}` };
    });
  };
  const example = generateNRandomTasks();

  const Title = styled.h3`
    grid-area: title;
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    text-align: center;
  `;
useEffect(() => {
    setTaskList(example);
  }, []);
  return (
    <Container>
      <Title>TODO App with React and Styled Components 💅 </Title>
      <TaskList key={nanoid()} taskList={taskList} editMode={editMode} setEditMode={ setEditMode} setCurrent={setCurrentTask} current={currentTask}  setTaskList={setTaskList}/>
      <TaskDetail setCurrent={setCurrentTask} editMode={editMode} setEditMode={setEditMode} current={currentTask} taskList={taskList} setTaskList={setTaskList} />
    </Container>
  );
}

export default App;
