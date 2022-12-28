import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { defaultItems } from '../mock/defaultItems';
import { ToDoContextProps, ToDoItemProps } from '../typings/toDo';

const ToDoContext = createContext<ToDoContextProps>({
  items: defaultItems,
  setItems: () => {},
});

const ToDo = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<ToDoItemProps[]>(defaultItems);

  return (
    <ToDoContext.Provider value={{ items, setItems }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDoContext = () => {
  return useContext(ToDoContext);
};

export default ToDo;
