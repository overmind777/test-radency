
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <h1>My Task Board</h1>
      <ButtonWrapperWrapper>
        <button>History</button>
        <button>Create new list</button>
      </ButtonWrapperWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

const ButtonWrapperWrapper = styled.div`
    display: flex;
    
`