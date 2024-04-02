
import { useEffect, useState } from 'react';
import Column from './components/Column';
import Header from './components/Header';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasksThunk } from './redux/operations';
import { AppDispatch } from './redux/store';
import ModalAddNewTask from './components/modalAddNewTask.tsx';
import { modalSelector, modalState } from './redux/taskSlice.ts';

function App() {
  const columnArray: string[] = ['To Do', 'Planned', 'In Progress', 'Closed']
  const dispatch = useDispatch<AppDispatch>()
  const modalStateSelector = useSelector(modalSelector)
  // const [isOpen, setIsOpen] = useState()

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
        {columnArray.map((column: string, idx: number) => {
          return <Column key={idx} title={column}/>
        })}
      </ListsWrapper>
      {modalStateSelector && <ModalAddNewTask closeModal={closeModal}/>}
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