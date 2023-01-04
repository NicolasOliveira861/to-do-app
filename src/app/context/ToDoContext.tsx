import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { defaultItems } from '../mock/defaultItems';
import {
  ToDoContextProps,
  ToDoItemIdentificator,
  ToDoItemProps,
} from '../typings/toDo';

const ToDoContext = createContext<ToDoContextProps>({
  items: defaultItems,
  setItems: () => {},
  selectedItems: [],
  setSelectedItems: () => {},
});

const ToDo = ({ children }: PropsWithChildren) => {
  const selected = useLocalStorage('selectedItems');
  const oldItems = useLocalStorage('items');

  const storageSelectedItems = selected.get() as ToDoItemIdentificator[];
  const storageItems = oldItems.get() as ToDoItemProps[];

  const [items, setItems] = useState<ToDoItemProps[]>(
    storageItems && storageItems.length > 0 ? storageItems : defaultItems
  );
  const [selectedItems, setSelectedItems] = useState<ToDoItemIdentificator[]>(
    storageSelectedItems && storageSelectedItems.length > 0
      ? storageSelectedItems
      : []
  );

  useEffect(() => {
    selected.set(selectedItems as []);
  }, [selectedItems]);

  useEffect(() => {
    oldItems.set(items as []);
  }, [items]);

  return (
    <ToDoContext.Provider
      value={{ items, setItems, selectedItems, setSelectedItems }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDoContext = () => {
  return useContext(ToDoContext);
};

export default ToDo;
