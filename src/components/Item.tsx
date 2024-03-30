import { Task } from "../redux/taskSlice";
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { editTaskThunk } from '../redux/operations.ts';
import { AppDispatch } from '../redux/store.ts';

interface ItemProps {
  item: Task;
}

interface ImpTextStyledProps {
  color: string;
}

const Item: React.FC<ItemProps> = ({ item }) => {

  const { id, title, description, importance } = item;
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
      <TextStyled>{description}</TextStyled>
      <WrapperImportance>
        <ImpTextStyled color={getImportanceColor()}>
           {importance}
        </ImpTextStyled>
      </WrapperImportance>
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

const WrapperImportance = styled.div`
    display: inline-block;
    padding: 5px;
  border-radius: 20px;
    background-color: lightgray;
  `

const ImpTextStyled = styled.p<ImpTextStyledProps>`
    &::before {
        content: '';
        display: inline-block;
        width: 10px; // Розмір кола
        height: 10px; // Розмір кола
        border-radius: 50%; // Зробити круглим
        background-color: ${props => props.color}; // Колір кола
        margin-right: 5px; // Відступ перед текстом
    }
`

const SelectStyled = styled.select`
  width: 100%;
  `