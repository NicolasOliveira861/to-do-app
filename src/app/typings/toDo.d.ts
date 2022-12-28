import React, { SetStateAction } from 'react';

export interface ToDoContextProps {
  items: ToDoItem[];
  setItems: React.Dispatch<SetStateAction<ToDoItem[]>>;
}

export interface ToDoItemProps {
  id: string;
  value: string;
}
