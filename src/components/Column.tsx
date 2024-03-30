
import ListItem from './ListItem';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { modalSelector } from '../redux/taskSlice.ts';
import { useState } from 'react';

type Text = {
  title: string
}
const Column = ({title}: Text) => {

  const stateModal = useSelector(modalSelector)
  const [isOpen, setIsOpen] = useState(false)

  const handleClicedAddNew = ()=>{
    setIsOpen(true)
  }


  return (
    <Item>
      <TitleWrapper>
        <h3>{title}</h3>
        <p></p>
      </TitleWrapper>
      <Button onClick={handleClicedAddNew}>Add new card</Button>
      <ListItem data={title}/>
    </Item>
  );
}

export default Column

const Item = styled.li`
    width: calc((100% - 60px) / 4);
    text-align: center;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 7px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
`

const Button = styled.button`
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: dashed 1px gray;
    border-radius: 5px;
    cursor: pointer;
`
