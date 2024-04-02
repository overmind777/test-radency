import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store.ts';
import { modalState } from '../redux/taskSlice.ts';


const ModalAddNewTask = ({closeModal}) => {

  const dispatch = useDispatch<AppDispatch>()

  const handleBackDrop = ({target, currentTarget})=>{
    if(target === currentTarget){
      closeModal()
    }
  }

  return (
    <Wrapper onClick={handleBackDrop}>
      <WrapperModal>
        <div>
          <div>
            <div>
              <h3>Task name</h3>
            </div>
            <div>
              <h3>Description</h3>
            </div>
          </div>
          <div>
            <h3>Activity</h3>
          </div>
        </div>
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
`