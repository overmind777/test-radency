import styled from 'styled-components';


const ModalAddNewTask = () => {
  return (
    <Wrapper>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Wrapper>
  );
};

export default ModalAddNewTask;

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(30%, 30%);
    width: 700px;
    height: 500px;
    background-color: aqua;
`