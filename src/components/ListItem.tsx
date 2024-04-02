import { useSelector } from 'react-redux';
import Item from './Item';
import { Task, tasksSelector } from '../redux/taskSlice';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type Data = {
  data: string;
}

const ListItem = ({ title }: Data) => {
  const tasks = useSelector(tasksSelector);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Фільтруємо завдання за категорією
    const filtered = tasks.filter(task => task.category === title.toLowerCase().replace(/\s+/g, ''));
    setFilteredTasks(filtered);
  }, [tasks, title]); // Залежності: загальний список завдань і категорія для фільтрації


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
