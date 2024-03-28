
import ListItem from './ListItem';
import styled from 'styled-components';

type Text = {
  title: string
}
const Column = ({title}: Text) => {
  return (
    <Item>
      <TitleWrapper>
        <h3>{title}</h3>
        <p></p>
      </TitleWrapper>
      <Button>Add new card</Button>
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
    padding: 10px;
    border: dashed 1px gray;
    border-radius: 5px;
`
