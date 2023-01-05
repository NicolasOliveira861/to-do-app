import { Check } from 'phosphor-react';
import { LegacyRef, useEffect, useState } from 'react';
import { useRef } from 'react';
import uuid from 'react-uuid';
import { useToDoContext } from '../../context/ToDoContext';
import { resizable } from '../../utils/resizeInput';

export const NewItem = () => {
  const { setItems } = useToDoContext();
  const [value, setValue] = useState<string>('');

  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input) {
      resizable(input, 7.7);
    }
  }, []);

  const reset = () => {
    setValue('');
    if (input.current) input.current.value = '';
  };

  const handleSubmit = () => {
    if (value === '') {
      return;
    }

    const newItem = {
      id: uuid(),
      value,
    };

    reset();
    setItems((oldValue) => [...oldValue, newItem]);
  };

  return (
    <div className="to-do-item new-item">
      <input
        ref={input as LegacyRef<HTMLInputElement>}
        id="item-text"
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Add a new item..."
      />
      <button
        disabled={value.length === 0 ? true : false}
        type="button"
        onClick={handleSubmit}
      >
        <Check color="#fff" size={24} />
      </button>
    </div>
  );
};
