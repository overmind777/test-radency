
import { useSelector } from 'react-redux'
import Item from './Item'
import { todoSelector } from '../redux/taskSlice'

const ListItem = () => {
  const listTask = useSelector(todoSelector)

  return (
    <ul>
      {listTask.map(item => {
        return <Item item={ item } />
       })}
    </ul>
  )
}

export default ListItem
