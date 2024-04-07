
import ListItem from './ListItem';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {modalState } from '../redux/taskSlice.ts';
import { AppDispatch } from '../redux/store.ts';
import React from 'react';

export type Text = {
  title: string;
}
const Column: React.FC<Text> = ({title}: Text) => {

  const dispatch = useDispatch<AppDispatch>()

  const handleClickedAddNew = ()=>{
    dispatch(modalState(true))
  }


  return (
    <Item>
      <TitleWrapper>
        <h3>{title}</h3>
        <p></p>
      </TitleWrapper>
      <Button onClick={handleClickedAddNew}>Add new card</Button>
      <ListItem title={title}/>
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
