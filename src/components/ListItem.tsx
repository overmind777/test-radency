import { useSelector } from 'react-redux';
import Item from './Item';
import { Task, tasksSelector } from '../redux/taskSlice';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Title {
  title: string;
}
const ListItem = ({ title }: Title) => {
  const tasks = useSelector(tasksSelector);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Фільтруємо завдання за категорією
    const filtered = tasks.filter(task => task.category === title.toLowerCase().replace(/\s+/g, ''));
    setFilteredTasks(filtered);
  }, [tasks]); // Залежності



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
