import styled from "styled-components";
function App() {
  // const Container = styled.div`
  //   width: 100vw;
  //   height: 100px;
  //   display: grid;
  //   grid-template-areas: tasks detail;
  //   grid-template-columns: 2fr 1fr;
  //   grid-template-rows: 50px 50px;
  //   color: #619b8a;
  //   font-style: oblique;
  // `;

  // const Tasks = styled(Container)`
  //   display: flex;
  //   justify-items: center;
  //   align-items: center;
  //   width: 100%;
  //   height: 100%;
  //   border: 1px solid #000;
  //   grid-area: tasks;
  //   background-color: #fe7f2d;
  //   `;
  //   const Detail = styled.div`
  //   display: flex;
  //   justify-items: center;
  //   align-items: center;
  //   width: 100%;
  //   height: 100%;
  //   border: 1px solid #000;
  //   grid-area: detail;
  //   background-color: #233d4d;
  // `;
  // const Title = styled.h3`
  //   text-align: center;
  //   font-family: "Raleway", sans-serif;
  // `;
  
  const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas: "title title"
                        "tasks detail";
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: 5vh minmax(90vh, 100vh);
  `;
  
const Title = styled.h3`
  grid-area: title;
  text-align:center;
`;
const TasksContainer = styled.div`
  grid-area: tasks;
  display:flex;
  justify-content:center;
  align-content:center;
`;
const DetailContainer = styled.div`
  grid-area: detail;
  display:flex;
  justify-content:center;
  align-content:center;
`;
  return (
    <Container>
      <Title>TODO App con Firebase</Title>
      <TasksContainer>
        <h4>Aqui van las tareas</h4>
      </TasksContainer>
      <DetailContainer>
        <h4>Aqui van los detalles</h4>
      </DetailContainer>
    </Container>
  );
}

export default App;
