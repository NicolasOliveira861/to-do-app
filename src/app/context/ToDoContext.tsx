import { createContext, PropsWithChildren, useContext, useState } from 'react';
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
  const [items, setItems] = useState<ToDoItemProps[]>(defaultItems);
  const [selectedItems, setSelectedItems] = useState<ToDoItemIdentificator[]>(
    []
  );

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
