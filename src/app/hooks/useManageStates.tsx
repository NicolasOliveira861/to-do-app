import { useToDoContext } from '../context/ToDoContext';
import { ToDoItemProps } from '../typings/toDo';

export const useManageStates = () => {
  const { items, setItems, selectedItems, setSelectedItems } = useToDoContext();

  const deleteItem = (id: string) => {
    const arr = items.filter((item: ToDoItemProps) => item.id !== id);

    return setItems(arr);
  };

  const checkItem = (id: string) => {
    const alreadyExists = selectedItems.find((el) => el.id === id);

    if (alreadyExists) {
      const newArr = selectedItems.filter((obj) => obj.id !== id);

      return setSelectedItems(newArr);
    }

    return setSelectedItems((oldValue) => [...oldValue, { id }]);
  };

  return {
    deleteItem,
    checkItem,
  };
};
