import { useSelector } from 'react-redux';
import Item from './Item';
import { Task, tasksSelector } from '../redux/taskSlice';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ListItemProps {
  data: string; // Очікувана категорія завдань
}

const ListItem: React.FC<ListItemProps> = ({ data }) => {
  const tasks = useSelector(tasksSelector);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Фільтруємо завдання за категорією
    const filtered = tasks.filter(task => task.category === data.toLowerCase().replace(/\s+/g, ''));
    setFilteredTasks(filtered);
  }, [tasks, data]); // Залежності: загальний список завдань і категорія для фільтрації


  return (
    <ListStyled>
      {filteredTasks.map((task, index) => (
        <Item key={index} item={task} />
      ))}
    </ListStyled>
  );
};

export default ListItem;

const ListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
