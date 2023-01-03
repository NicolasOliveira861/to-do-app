import React, { SetStateAction } from 'react';

export interface ToDoContextProps {
  items: ToDoItemProps[];
  setItems: React.Dispatch<SetStateAction<ToDoItem[]>>;
  selectedItems: ToDoItemIdentificator[];
  setSelectedItems: React.Dispatch<SetStateAction<ToDoItemIdentificator[]>>;
}

export interface ToDoItemProps {
  id: string;
  value: string;
}

export interface ToDoItemIdentificator {
  id: string;
}
