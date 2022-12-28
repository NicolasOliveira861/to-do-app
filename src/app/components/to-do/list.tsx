import { useToDoContext } from '../../context/ToDoContext';
import { ToDoItemProps } from '../../typings/toDo';
import ToDoItem from './item';
import { NewItem } from './new';

const ToDoList = () => {
  const { items } = useToDoContext();

  return (
    <div className="to-do-list">
      {items.map((item: ToDoItemProps, idx) => (
        <ToDoItem id={item.id} key={item.id} content={item.value} />
      ))}

      <NewItem />
    </div>
  );
};

export default ToDoList;
