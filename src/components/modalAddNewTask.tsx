import styled from 'styled-components';
import React, { useState } from 'react';
import { ModalInterface } from '../App.tsx';

import sprite from '../icon/sprite.svg'


const ModalAddNewTask = ({closeModal}: ModalInterface) => {

  const [titleValue,setTitleValue] = useState<string>("")
  const [impotanceValue,setImpotanceValue] = useState<string>("")
  const [categoryValue,setCategoryValue] = useState<string>("")
  const [dateValue,setDateValue] = useState<string>("")
  const [descriptionValue, setDescriptionValue] = useState<string>("")

  const handleBackDrop = ({target, currentTarget}: React.MouseEvent)=>{
    if(target === currentTarget){
      closeModal()
    }
  }

  const handleClickSvg = ({target}: React.MouseEvent)=>{
    if(target){
      closeModal()
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(titleValue, impotanceValue, categoryValue, dateValue, descriptionValue)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(name, value)
    switch (name) {
      case 'taskName':
        setTitleValue(value);
        break;
      case 'category':
        setCategoryValue(value);
        break;
      case 'date':
        setDateValue(value);
        break;
      case 'importance':
        setImpotanceValue(value);
        break;
      case 'description':
        setDescriptionValue(value);
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper onClick={handleBackDrop}>
      <WrapperModal>
        <HeaderStyled>
          <SvgStyled width={16} height={16} onClick={handleClickSvg}>
            <use xlinkHref={`${sprite}#cross`}></use>
          </SvgStyled>
        </HeaderStyled>
        <ContentWrapper>
          <FormStyled onSubmit={handleSubmit}>
            <LabelStyled htmlFor="taskName">Task name</LabelStyled>
            <InputStyled name="taskName" id="taskName" type="text" placeholder="Enter name" value={titleValue} onChange={handleInputChange}/>
            <LabelStyled htmlFor="category">Category</LabelStyled>
            <InputStyled name="category" id="category" type="text" placeholder="Enter category" value={categoryValue} onChange={handleInputChange}/>
            <LabelStyled htmlFor="date">Date</LabelStyled>
            <InputStyled name="date" id="date" type="date" placeholder="Enter date" value={dateValue} onChange={handleInputChange}/>
            <LabelStyled htmlFor="importance">Importance</LabelStyled>
            <SelectStyled value={impotanceValue} onChange={handleInputChange}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </SelectStyled>
            <LabelStyled htmlFor="description">Description</LabelStyled>
            <TextAreaStyled name="description" id="description" placeholder="Enter description max length 300" rows={5} cols={50} maxLength={300} value={descriptionValue} onChange={handleInputChange}/>
            <ButtonStyled type="submit">Save</ButtonStyled>
          </FormStyled>
        </ContentWrapper>
      </WrapperModal>
    </Wrapper>
  );
};

export default ModalAddNewTask;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    
    background-color: rgb(180,180,180,50%);
`

const WrapperModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(30%, 30%);
    width: 700px;
    height: 500px;
    
    border-radius: 15px;
    background-color: white;

    overflow: hidden;
`

const HeaderStyled = styled.header`
    height: 30px;
    padding: 7px;
    text-align: end;
    background-color: #61dafb;
`

const SvgStyled = styled.svg`
    
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`

const FormStyled = styled.form`
  display: flex;
    flex-direction: column;
`

const LabelStyled = styled.label`
  margin-bottom: 5px;
  `

const InputStyled = styled.input`
    margin-bottom: 10px;
`

const SelectStyled = styled.select`
    margin-bottom: 10px;`

const TextAreaStyled = styled.textarea`
    text-wrap: normal;
`

const ButtonStyled = styled.button`
    margin-top: 20px;
`
