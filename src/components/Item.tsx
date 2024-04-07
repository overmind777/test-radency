import { Task } from "../redux/taskSlice";
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { editTaskThunk } from '../redux/operations.ts';
import { AppDispatch } from '../redux/store.ts';
import React from 'react';

interface ItemProps {
  item: Task;
}

// interface ImpTextStyledProps {
//   color: string;
// }

const Item: React.FC<ItemProps> = ({ item }) => {

  const { id, title, description, date,  importance } = item;
  const dispatch = useDispatch<AppDispatch>()

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

  const hendlerSelec = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    dispatch(editTaskThunk({id, category: e.target.value}))
  }


  return (
    <ItemStyled>
      <TitleStyled>{title}</TitleStyled>
      <TextImportanceStyled color={getImportanceColor()}>{importance}</TextImportanceStyled>
      <TextStyled>{date}</TextStyled>
      <TextStyled>{description}</TextStyled>
      <SelectStyled name="moveTo" id="moveTo" onChange={hendlerSelec}>
        <option value="0">Move to</option>
        <option value="todo">To Do</option>
        <option value="planned">Planned</option>
        <option value="inprogress">In Progress</option>
        <option value="closed">Closed</option>
      </SelectStyled>
    </ItemStyled>
  );
};

export default Item;

const ItemStyled = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 5px;
  border: 1px solid gray;
    border-radius: 5px;
  `

const TitleStyled = styled.p`
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