
import { useEffect } from 'react';
import Column from './components/Column';
import Header from './components/Header';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getAllTasksThunk } from './redux/operations';
import { AppDispatch } from './redux/store';

function App() {
  const columnArray: string[] = ['To Do', 'Planned', 'In Progress', 'Closed']
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getAllTasksThunk());
  }, [dispatch])
  
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