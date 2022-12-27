import ToDoItem from './item';
import { NewItem } from './new';

const ToDoList = () => {
  const defaultList = [
    {
      content: 'React based to-do app...',
    },
    {
      content: 'Made with React, TypeScript and Sass...',
    },
    {
      content: 'Manage your items with the power of React!',
    },
  ];

  return (
    <div className="to-do-list">
      {defaultList.map((item) => (
        <ToDoItem content={item.content} />
      ))}

      <NewItem />
    </div>
  );
};

export default ToDoList;
