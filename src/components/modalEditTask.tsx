import sprite from '../icon/sprite.svg';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store.ts';
import { getTaskByIdThunk, removeTaskThunk } from '../redux/operations.ts';
import { modalState } from '../redux/taskSlice.ts';


interface Open {
  idTask: number;
  click: ()=> void;
}
const ModalEditTask = ({idTask, click}: Open) => {

  const dispatch = useDispatch<AppDispatch>()

  const handleEditTask = ()=>{
    dispatch(getTaskByIdThunk(idTask))
    click()
    dispatch(modalState(true))
  }

  const handleDeleteTask = ()=>{
    dispatch(removeTaskThunk(idTask))
    click()
  }

  return (
    <ModalStyled>
      <SvgWrapper onClick={click}>
        <SvgStyled width={16} height={16}>
          <use xlinkHref={`${sprite}#cross`}></use>
        </SvgStyled>
      </SvgWrapper>
      <ContentWrapper>
        <TextStyled onClick={handleEditTask}>Edit</TextStyled>
        <TextStyled onClick={handleDeleteTask}>Delete</TextStyled>
      </ContentWrapper>
    </ModalStyled>
  )
};

export default ModalEditTask;


const ModalStyled = styled.div`
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: lightgray;
    transform: translateX(-100%);
`

const SvgWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 5px;
`

const SvgStyled = styled.svg`
    cursor: pointer;
    &:hover{
        fill: red;
    }
`

const ContentWrapper = styled.div`
    
`
const TextStyled = styled.p`
    margin-bottom: 20px;
    cursor: pointer;
`