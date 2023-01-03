import { TrashSimple } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useToDoContext } from '../../context/ToDoContext';
import { useManageStates } from '../../hooks/useManageStates';

interface Props {
  content: string;
  id: string;
}

const ToDoItem = ({ content, id }: Props) => {
  const { deleteItem, checkItem } = useManageStates();
  const { selectedItems } = useToDoContext();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const find = selectedItems.find((el) => el.id === id);

    if (find) {
      return setIsSelected(true);
    }

    return setIsSelected(false);
  }, [selectedItems]);

  return (
    <div className={`to-do-item${isSelected ? ' selected' : ''}`}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => checkItem(id)}
      />
      <span>{content}</span>
      <button className="to-do-delete-item" onClick={() => deleteItem(id)}>
        <TrashSimple size={24} />
      </button>
    </div>
  );
};

export default ToDoItem;
