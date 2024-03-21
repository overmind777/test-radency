
import Column from './components/Column';
import Header from './components/Header';
import styled from 'styled-components';

function App() {
  const columnArray: string[] = ['To Do', 'Planned', 'In Progress', 'Closed']
  return (
    <Wrapper>
        <Header />
      <ListsWrapper>
        {columnArray.map((column: string, idx: number) => {
          return <Column key={idx} title={column}/>
        })}
      </ListsWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
    width: 100%;
    padding: 0 20px;
`

const ListsWrapper = styled.ul`
    display: flex;  
    justify-content: space-between;
    gap: 20px;
`