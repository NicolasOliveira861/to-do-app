import { useToDoContext } from '../context/ToDoContext';
import { ToDoItemProps } from '../typings/toDo';

export const useManageStates = () => {
  const { items, setItems } = useToDoContext();

  const deleteItem = (id: string) => {
    const arr = items.filter((item: ToDoItemProps) => item.id !== id);

    return setItems(arr);
  };

  return {
    deleteItem,
  };
};
