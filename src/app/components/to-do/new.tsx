import { Check } from 'phosphor-react';
import { resizable } from '../../utils/resizeInput';

export const NewItem = () => {
  return (
    <div className="to-do-item new-item">
      <input
        id="item-text"
        type="text"
        placeholder="Adicione um novo item..."
      />
      <button type="button">
        <Check size={24} />
      </button>
    </div>
  );
};
