import { TrashSimple } from 'phosphor-react';
import { useManageStates } from '../../hooks/useManageStates';

interface Props {
  content: string;
  id: string;
}

const ToDoItem = ({ content, id }: Props) => {
  const { deleteItem } = useManageStates();

  return (
    <div className="to-do-item">
      <input type="checkbox" />
      <span>{content}</span>
      <button className="to-do-delete-item" onClick={() => deleteItem(id)}>
        <TrashSimple size={24} />
      </button>
    </div>
  );
};

export default ToDoItem;
