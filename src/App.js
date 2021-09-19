import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import styled from "styled-components";
import TaskDetail from "./Components/TaskDetail";
import TaskList from "./Components/TaskList";
function App() {
  const [taskList, setTaskList] = useState([]);
  const [editMode, setEditMode] = useState(false)
  const [currentTask, setCurrentTask] = useState({})
  useEffect(() => {
    setTaskList(example);
  }, []);
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
  const generateNRandomTasks = (n = 0) => {
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

  return (
    <Container>
      <Title>TODO App con Firebase</Title>
      <TaskList key={nanoid()} current={setCurrentTask} taskList={taskList} />
      <TaskDetail key={nanoid()} setCurrent={setCurrentTask} current={currentTask} taskList={setTaskList} />
    </Container>
  );
}

export default App;
