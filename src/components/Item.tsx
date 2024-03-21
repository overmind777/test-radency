import { Task } from "../redux/taskSlice";

interface ItemProps {
  item: Task;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { title, description, date } = item;
  return (
    <li>
      <p>{title}</p>
      <p>{description}</p>
      <p>{date}</p>
    </li>
  );
};

export default Item;
