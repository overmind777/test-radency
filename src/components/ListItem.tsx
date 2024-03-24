
import { useSelector } from 'react-redux'
// import Item from './Item'
import { tasksSelector } from '../redux/taskSlice'

const ListItem = () => {
  const listTask = useSelector(tasksSelector)
  console.log('item', listTask)

  return (
    <ul>
      {/*{listTask.map(item => {*/}
      {/*  return <Item item={ item } />*/}
      {/* })}*/}
    </ul>
  )
}

export default ListItem
