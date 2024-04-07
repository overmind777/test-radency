import { Task } from "../redux/taskSlice";
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { editTaskThunk } from '../redux/operations.ts';
import { AppDispatch } from '../redux/store.ts';
import React, { useState } from 'react';
import sprite from '../icon/sprite.svg';
import ModalEditTask from './modalEditTask.tsx';

interface ItemProps {
  item: Task;
}

const Item: React.FC<ItemProps> = ({ item }) => {

  const { id, title, description, date,  importance } = item;
  const dispatch = useDispatch<AppDispatch>()

  const [isOpen, setIsOpen] = useState(false)

  const getImportanceColor = () => {

    switch (importance) {
      case 'low':
        return 'green';
      case 'medium':
        return 'orange';
      case 'high':
        return 'red';
      default:
        return 'white';
    }
  }

  const hendleSelect = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    dispatch(editTaskThunk({id, category: e.target.value}))
  }

  const handleClick = ()=>{
    setIsOpen(prev => !prev)
  }

  return (
    <ItemStyled>
      <TitleWrapper>
        <TitleStyled>{title}</TitleStyled>
        <SvgStyled width={16} height={16} onClick={handleClick}>
          <use xlinkHref={`${sprite}#pencil`}></use>
        </SvgStyled>
      </TitleWrapper>
      <TextImportanceStyled color={getImportanceColor()}>{importance}</TextImportanceStyled>
      <TextStyled>{date}</TextStyled>
      <TextStyled>{description}</TextStyled>
      <SelectStyled name="moveTo" id="moveTo" onChange={hendleSelect}>
        <option value="0">Move to</option>
        <option value="todo">To Do</option>
        <option value="planned">Planned</option>
        <option value="inprogress">In Progress</option>
        <option value="closed">Closed</option>
      </SelectStyled>
      {isOpen && <ModalEditTask idTask={id} click={handleClick}/> }
    </ItemStyled>
  );
};

export default Item;

const ItemStyled = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 5px;
  border: 1px solid gray;
    border-radius: 5px;
  `

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const TitleStyled = styled.p`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
`

const TextStyled = styled.p`
  color: #9fa0ae;
`

const TextImportanceStyled = styled.p`
  color: #9fa0ae;
    &::before {
        content: '';
        display: inline-block;
        width: 10px; // Розмір кола
        height: 10px; // Розмір кола
        border-radius: 50%; // Зробити круглим
        border: 1px solid black;
        background-color: ${props => props.color}; // Колір кола
        margin-right: 5px; // Відступ перед текстом
    }
`

const SelectStyled = styled.select`
  width: 100%;
  `

const SvgStyled = styled.svg`
    cursor: pointer;
    &:hover{
        fill: red;
    }
`
