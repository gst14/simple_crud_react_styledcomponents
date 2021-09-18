import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import styled from "styled-components";
import TaskDetail from "./Components/TaskDetail";
import TaskList from "./Components/TaskList";
function App() {
  const [taskList, setTaskList] = useState([]);
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
    grid-template-rows: 5vh minmax(80vh, 90vh);
  `;
  const generateNRandomTasks = (n = 5) => {
    return [...Array(n)].map((_, i) => `Task ${i + 1}`);
  };
  const example = generateNRandomTasks();

  const Title = styled.h3`
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    grid-area: title;
    text-align: center;
  `;

  return (
    <Container>
      <Title>TODO App con Firebase</Title>
      <TaskList key={nanoid()} taskList={taskList} />
      <TaskDetail key={nanoid()} />
    </Container>
  );
}

export default App;
