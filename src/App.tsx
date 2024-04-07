
import { useEffect } from 'react';
import Column from './components/Column';
import Header from './components/Header';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasksThunk } from './redux/operations';
import { AppDispatch } from './redux/store';
import ModalNewTask from './components/modalNewTask.tsx';
import { modalSelector, modalState} from './redux/taskSlice.ts';

export interface ModalInterface {
  closeModal: ()=> void;
}

function App() {
  const columnArray = ['To Do', 'Planned', 'In Progress', 'Closed']
  const dispatch = useDispatch<AppDispatch>()
  const modalStateSelector = useSelector(modalSelector)


  useEffect(() => {
    dispatch(getAllTasksThunk());
  }, [dispatch])

  const closeModal = ()=>{
    dispatch(modalState(false))
  }
  
  return (
    <Wrapper>
        <Header />
      <ListsWrapper>
        {columnArray.map((category, idx) => {
          return <Column key={idx} title={category}/>
        })}
      </ListsWrapper>
      {modalStateSelector && <ModalNewTask closeModal={closeModal}/>}
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
    gap: 20px;
`