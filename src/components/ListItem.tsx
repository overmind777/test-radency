import { useSelector } from 'react-redux';
import Item from './Item';
import { Task, tasksSelector } from '../redux/taskSlice';
import { useEffect, useState } from 'react';

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
    <ul>
      {filteredTasks.map((task, index) => (
        <Item key={index} item={task} />
      ))}
    </ul>
  );
};

export default ListItem;
