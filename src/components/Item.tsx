import { Task } from "../redux/taskSlice";

interface ItemProps {
  item: Task;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { title, description, importance } = item;
  return (
    <li>
      <p>{title}</p>
      <p>{description}</p>
      <p>{importance}</p>
    </li>
  );
};

export default Item;
